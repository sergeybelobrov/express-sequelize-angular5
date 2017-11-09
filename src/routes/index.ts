import * as winston from 'winston'
import * as express from 'express'
import * as cors from "cors"
import { Express, Request, Response } from 'express'
import * as ProjectsRoutes from './project'

export function initRoutes(app: Express) {
    winston.log('info', '--> Initialisations des routes')

    app.use(cors());

    app.get('/api', (req: Request, res: Response) => res.status(200).send({
      message: 'server is running!'
    }))
    ProjectsRoutes.routes(app)
}
