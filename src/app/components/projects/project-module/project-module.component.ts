import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-module',
  templateUrl: './project-module.component.html',
  styleUrls: ['./project-module.component.css']
})
export class ProjectModuleComponent {
  showing:string = 'all';

  projects = [
    { title: 'Did We Brick It <br> <em>E-Commerce Website</em>',
     description: 'A website created with Angular, Java Spring and ',
     info:['Github: <fa-icon [icon]="faGithub"></fa-icon>',
    'KrackHead'
    ],
     skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
     +' Skill | Skill | Skill | Skill',
      category:'software',
       media:[
      {url: 'assets/images/pfp.png', youtube:false},
      {url: '1ozGKlOzEVc', youtube:true},
    ]  },
    { title: 'Project 1',
     description: 'Description for Project 1',
     info:['Github'],
     skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
     +' Skill | Skill | Skill | Skill',
      category:'games',
       media:[
      {url: 'assets/images/pfp.png', youtube:false},
      {url: '1ozGKlOzEVc', youtube:true},
    ]  },    { title: 'Project 1',
    description: 'Description for Project 1',
    info:['Github'],
    skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
    +' Skill | Skill | Skill | Skill',
     category:'software',
      media:[
     {url: 'assets/images/pfp.png', youtube:false},
     {url: '1ozGKlOzEVc', youtube:true},
   ]  },    { title: 'Project 1',
   description: 'Description for Project 1',
   info:['Github'],
   skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
   +' Skill | Skill | Skill | Skill',
    category:'games',
     media:[
    {url: 'assets/images/pfp.png', youtube:false},
    {url: '1ozGKlOzEVc', youtube:true},
  ]  },    { title: 'Project 1',
  description: 'Description for Project 1',
  info:['Github'],
  skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
  +' Skill | Skill | Skill | Skill',
   category:'software',
    media:[
   {url: 'assets/images/pfp.png', youtube:false},
   {url: '1ozGKlOzEVc', youtube:true},
 ]  },    { title: 'Project 1',
 description: 'Description for Project 1',
 info:['Github'],
 skills:'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
 +' Skill | Skill | Skill | Skill',
  category:'games',
   media:[
  {url: 'assets/images/pfp.png', youtube:false},
  {url: '1ozGKlOzEVc', youtube:true},
]  },
  ];

  changeCategory(showString:string){
    this.showing = showString;
  }
}
