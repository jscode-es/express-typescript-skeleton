// Environment variable
const $ = process.env

// Loading Node JS modules
import fs from 'fs/promises'
import path from 'path'

const script = `
const Server = require('../../controller/server.js')

const ip = ':ip'
const port = :port
const subdomain = ':subdomain'

new Server({ ip, port, subdomain, mode: Server.Types.:protocol })
`

class generate {

    static ports: any = []
    static subdomains: any = []

    static async service(subdomain: string, service: any) {

        let _default =
        {
            protocol: 'h1',
            port: 3000,
            ip: '0.0.0.0',
            subdomain
        }

        // Override
        if ('dev_mode' in service)
            service = service.dev_mode

        Object.assign(_default, service)

        let content = generate.replace(_default)

        if (!content) {

            //fs.unlink(path.resolve(String($.router), subdomain))

            return console.warn(`No se pudo crear el micros servicio: ${subdomain}`)
        }

        let dir = path.resolve(String($.router), subdomain, 'start.js')


        await fs.writeFile(dir, content)
    }

    private static replace(service: any) {

        let textScript = script
        let isCanCreate = true

        for (const key in service) {

            if (key === 'port') {

                let port: any = service.port

                if (generate.ports.includes(port)) {
                    isCanCreate = false
                    break
                }

                generate.ports.push(port)

            }

            if (key === 'subdomain') {

                let subdomain: any = service.subdomain

                if (generate.subdomains.includes(subdomain)) {
                    isCanCreate = false
                    break
                }

                generate.subdomains.push(subdomain)

            }

            if (typeof service[key] === 'string') {
                service[key] = String(service[key]).toLowerCase()
            }

            textScript = textScript.replace(`:${key}`, service[key])
        }

        return isCanCreate ? textScript : false
    }
}

export default generate