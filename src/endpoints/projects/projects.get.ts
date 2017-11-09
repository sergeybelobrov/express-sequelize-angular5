import { Request, Response } from 'express'
import { ProjectsDao } from '../../dao/index'
import { ProjectInstance} from '../../sqlz/models/project'

export function list(req: Request, res: Response) {
  return ProjectsDao
    .findAll()
    .then(projects => {
      projects.sort(function(a:ProjectInstance,b:ProjectInstance){
        return a.createdAt.getTime() - b.createdAt.getTime()
      })
      res.status(200).send(projects)
    })
    .catch(error => res.boom.badRequest(error))
}
