// Environment variable
//const $ = process.env

// Loading Node JS modules
//import path from 'path'

// Module external
//import fs from 'fs-extra'
//import express from 'express'
//import http2 from 'http2'
//import http2Express from 'http2-express-bridge'
//import fileUpload from 'express-fileupload'
//import cors from 'cors'
//import cookie from 'cookie-parser'

// Module owner
import Console from '../../console'

class Protocol {
    // Enviroment public
    public name: string = 'h2'

    // Enviroment private
    //private server: any
    //private app: any

    // Contructor
    constructor() {

        Console.log('Constructor')

        // Application
        //this.app = http2Express(express)

        // Initialitze
        //this.start()

    }

    // Setters
    /* private setSetting() {

        this.server.setConfig((app: express.Application) => {

            app.use(express.json({ limit: '5mb' }))
        })
    } */

    // Getters
    /* private getSetting() {

    } */

    // Methods
    /* private build() {
        this.app = this.server.build()
    } */

    /* private listen() {

    } */

    /* private start()
    {   
        // Get certificate
        let certificate = Protocol.getCertificate()

        if (certificate.error) {
            Console.log('[ ERROR ] Certificate: ', certificate.error)
            return false;
        } 
    } */

}

export default Protocol