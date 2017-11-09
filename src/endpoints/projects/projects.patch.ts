import { Request, Response } from 'express'
import { ProjectsDao } from '../../dao/index'

export function update(req: Request, res: Response) {
  console.log(req.body);

  return ProjectsDao.update(req.body)
         .then(project => res.status(201).send(project))
         .catch(error => res.boom.badRequest(error))
}