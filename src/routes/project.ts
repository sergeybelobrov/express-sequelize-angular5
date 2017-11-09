import { Express } from 'express'
import { ProjectsController } from '../endpoints/index'

export function routes(app: Express) {

  app.get('/api/projects', ProjectsController.ProjectsGet.list)
  app.post('/api/projects', ProjectsController.ProjectsPost.create)
  app.delete('/api/projects', ProjectsController.ProjectsDestroy.destroy)
  app.patch('/api/projects', ProjectsController.ProjectsUpdate.update)
}
