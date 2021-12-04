// Environment variable
const $ = process.env

// Loading Node JS modules
import path from 'path'
import fs from 'fs'
import fsp from 'fs/promises'

// Module external


// Module owner
import generate from './generate'

class Service {

    static async launch() {

        // Instanciar servicio
        let service = new Service()

        // Init enviroment
        service.enviroment()

        // Ger services
        let services = await service.getService()

        // Build services
        await service.build(services)

    }

    private async getService() {

        if (!fs.existsSync(String($.service))) {
            return new Error('Not exist setting services')
        }

        return (await import(String($.service))).default

    }

    private async build(services: any) {

        // Make router
        await fsp.mkdir(String($.router))

        for (const key in services) {

            // Make directory
            await fsp.mkdir(path.resolve(String($.router), key))

            // Generate service
            await generate.service(key, services[key])

        }

    }

    private enviroment() {

        // Project root
        $.root = String(process.env.INIT_CWD)

        // Projects
        $.client = path.resolve($.root, 'dist/client')
        $.server = path.resolve($.root, 'dist/server')

        // Client
        $.public = path.resolve($.client, 'public')

        // Server
        $.service = path.resolve($.root, 'service.json')
        $.i18n = path.resolve($.server, 'i18n')
        $.certificate = path.resolve($.server, 'certificate')

        // MVC
        $.controller = path.resolve($.server, 'src/controller')
        $.model = path.resolve($.server, 'src/model')
        $.view = path.resolve($.server, 'src/view')
        $.router = path.resolve($.server, 'src/router')

        // Controller
        $.abstract = path.resolve($.controller, 'abstract')
        $.interface = path.resolve($.controller, 'interface')
        $.protocol = path.resolve($.controller, 'protocol')
    }
}

export default Service