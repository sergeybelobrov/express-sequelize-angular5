import { Component,Input,Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../shared/models';
import {
 ProjectsService
} from '../shared';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectFormComponent implements OnInit {

  constructor(  
    private projectsService: ProjectsService
  ) { }

  name: string;

  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();
  @Output() createProject = new EventEmitter<string>();

  ngOnInit() {
  }
  newProject() { 
    this.projectChange.emit(this.project);
    this.createProject.emit('submit');
   }
   
}
