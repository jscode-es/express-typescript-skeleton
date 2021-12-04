// Loading Node JS modules
import path from 'path'

// Module external
import dotenv from 'dotenv'

// Module owner
import service from './src/controller/service'

// Enviroment path
const envFileName = `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '.development'}`
const pathToEnvFile = path.resolve(__dirname, envFileName)

// Initialize configuration
dotenv.config({ path: pathToEnvFile })

// Launch services
service.launch()