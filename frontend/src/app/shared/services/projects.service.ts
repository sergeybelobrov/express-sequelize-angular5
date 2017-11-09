import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ProjectApi} from "../../api/api";
const ProjectAdmin: ProjectApi = new ProjectApi();
import { Project } from '../models';

@Injectable()
export class ProjectsService {
  constructor () {}

  projectCreate(project : Project) {
      return ProjectAdmin.projectCreate({"data":project})
    }
  projectDelete(project : Project) {
        return ProjectAdmin.projectDelete({"data":project})
    }
  projectUpdate(project : Project) {
        return ProjectAdmin.projectUpdate({"data":project})
    }
  getAllProjects(){
        return ProjectAdmin.projectList()
    }
}
