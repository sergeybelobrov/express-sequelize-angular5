import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../shared/models';
import {
  ProjectsService
 } from '../shared';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectViewComponent implements OnInit {

  constructor( 
    private projectsService: ProjectsService
  ) { }

  projects: Project[];
  projectform: Project;

  ngOnInit() {
    this.projects = [new Project];
    this.projects[0].name = "...";
    this.projects[0].description = "...";
    this.projects[0].status = "...";
    this.projectform = new Project;
    this.projectform.name = "form1";
    this.getAllProjects();
  }
  createProject(event: string){
    console.log(event);
    console.log("create Project on parent component");
    console.log(this.projectform);
    const self = this;
    this.projectsService.projectCreate(this.projectform).then((response: Response) => {
      response.json().then(((value: Project) => {
        console.log(value);
        self.projects.push(value);
          console.log("API call projectCreate finish");
      }))
    }).catch((response: Response) => {
        response.json().then((value: { detail: any }) => {
            if ((!value) || (!value.detail)) {
                return
            }
            if (typeof value.detail === 'string') {
                console.log(value.detail);
            } else {
                console.log(value.detail.datafile);
            }
        })
    })
  }
  updateProject(target: Project){
    console.log("editProject on Parent Component");
    console.log(target);
    this.projectsService.projectUpdate(target).then((response: string) => {
      console.log(response);

    }).catch((response: Response) => {
      console.log("deleting Error");
    })
  }
  deleteProject(target: Project){
    console.log(target.id);
    console.log("deleteProject on Parent Component");
    this.projectsService.projectDelete(target).then((response: string) => {
      console.log(response);
      for ( var i = 0; i < this.projects.length; i ++){
        if(this.projects[i].id == target.id){
          this.projects.splice(i, 1);
          break;
        }
      }
    }).catch((response: Response) => {
      console.log("deleting Error");
    })
  }
  getAllProjects(){
    console.log("get All Project");
    this.projectsService.getAllProjects().then((response: Array<Project> ) => {
      this.projects = response;
    }).catch((response: Response) => {
        response.json().then((value: { detail: any }) => {
            if ((!value) || (!value.detail)) {
                return
            }
            if (typeof value.detail === 'string') {
                console.log(value.detail);
            } else {
                console.log(value.detail.datafile);
            }
        })
    })
  }
}
