import * as uuid from 'uuid'
import db from '../sqlz/models/index'
import * as Promise from 'bluebird';
import { ProjectInstance } from '../sqlz/models/project'

export function create(project: ProjectInstance): Promise<any> {
  return db.Project
    .create({
      name: project.name,
      description: project.description,
      status: project.status
    });
}

export function findAll(): Promise<any> {
  return db.Project
    .findAll()
}

export function destroy(project: ProjectInstance): Promise<any> {
  return db.Project
    .destroy({
      where: {
        id: project.id
     }
    })
}

export function find(project: ProjectInstance): Promise<any> {
  return db.Project
    .find({
      where: {
        id: project.id
     }
    })
}

export function update(project: ProjectInstance): Promise<any> {
  return new Promise<any>((resolve, reject)=>{
    db.Project
    .find({
      where: {
        id: project.id
     }
    })    
    .then(fp => {
      if(fp)
         return fp.updateAttributes(project)
      else 
         reject("identified project is not available")
    })
    .catch(error => reject(error))
        .then(ufp => {
            resolve(ufp)
          })
        .catch(error => reject(error))
  })
}