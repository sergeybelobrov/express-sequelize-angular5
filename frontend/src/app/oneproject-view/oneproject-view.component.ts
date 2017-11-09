import { Component,Input,Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../shared/models';

@Component({
  selector: 'app-oneproject-view',
  templateUrl: './oneproject-view.component.html',
  styleUrls: ['./oneproject-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OneprojectViewComponent implements OnInit {

  constructor() { }
  isEditing: boolean;
  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();
  @Output() deleteProject = new EventEmitter<Project>();
  @Output() updateProject = new EventEmitter<Project>();

  ngOnInit() {
    this.isEditing = false;
  }
  onEdit(){
    console.log("edit| cancel");
    this.isEditing = !this.isEditing;
  }
  onUpdate(){
    console.log("update");
    this.isEditing = false;
    this.projectChange.emit(this.project);
    this.updateProject.emit(this.project);
  }
  onDelete(){
    console.log("delete");
    this.deleteProject.emit(this.project);
  }
}
