import { Request, Response } from 'express'
import { ProjectsDao } from '../../dao/index'

export function destroy(req: Request, res: Response) {
  console.log(req.body);
  return ProjectsDao.destroy(req.body)
    .then(deleted => {
        if(deleted)
          res.status(201).send('success')
        else
          res.boom.badRequest('does not exist')
    })
}