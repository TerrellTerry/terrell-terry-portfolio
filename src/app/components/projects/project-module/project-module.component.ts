import { Component } from '@angular/core';

@Component({
  selector: 'app-project-module',
  templateUrl: './project-module.component.html',
  styleUrls: ['./project-module.component.css']
})
export class ProjectModuleComponent {
  projects = [
    { title: 'Project 1', description: 'Description for Project 1',  isSoftware:true },
    { title: 'Project 2', description: 'Description for Project 2', isSoftware:false },
  ];
}
