import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { OneprojectViewComponent } from './oneproject-view/oneproject-view.component';
import { ProjectFormComponent } from './project-form/project-form.component';

import {
  ProjectsService
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewComponent,
    OneprojectViewComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
