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
     description: 'The Ecommerce Web Application provides the core features present in many common e-commerce applications. General functionality includes features such as creating and logging into an account, viewing products and my profile, as well as adding items to a cart and checking out.',
     info:['Github Frontend: https://github.com/DidWeBrickIt/e-commerce-frontend-main',
     'Github Backend: https://github.com/DidWeBrickIt/e-commerce-backend-main'
    ],
     skills:'Git | HTML | CSS | Postman | Java | JavaScript | Spring Boot | Spring Test | Spring AOP | Spring Framework | PostgreSQL | AWS RDS',
      category:'software',
       media:[
      {url: 'assets/images/projects/default.png', youtube:false}
    ]  },
    { title: 'Final Paradise',
     description: 'A top-down roguelike based on the game Binding of Isaac created by a team of 4 people for my capstone project at Full Sail University.',
     info:['Download: https://drive.google.com/file/d/1h8Leeo95Lts7OytXcvG8BsOEqmoXoyGk/view?usp=sharing'],
     skills:'C# | Unity | Systems Design | Playtesting | Collaboration',
      category:'games',
       media:[
      {url: 'assets/images/projects/default.png', youtube:false}
    ]  },    { title: 'Town Review Board',
    description: 'The Town Review board is an application for a small local town. The application allows constituents to submit issues that they have noticed in the town. The review board members can look over these issues. Board members can then create meetings which can be viewed by constituents and display information on what needs to be discussed.',
    info:['Github: https://github.com/TerrellTerry/Town-Review-Board'],
    skills:'Java | HTML | CSS | JavaScript | Javalin | PostgreSQL | Azure | Docker',
     category:'software',
      media:[
     {url: 'assets/images/projects/default.png', youtube:false}
   ]  },    { title: 'SCRAPS',
   description: "A game where I worked on a level as part of a team from Full Sail University. The level created was to obtain a golden honeybun and give it to the bastions (the quest givers). Within my level, I utilized the introduce, practice, master design patterns for introducing new mechanics to the player.",
   info:['Mechanics: Breakable wall, pressure plate system'],
   skills:'Level Design | C# Scripting | ',
    category:'games',
     media:[
    {url: 'assets/images/projects/default.png', youtube:false}
  ]  },    { title: 'Daycare Report Card System<br><em>Full Stack Web Application</em>',
  description: "The Daycare Report Card System is an application for recording the behavior of students at a local daycare center.",
  info:['Github: https://github.com/TerrellTerry/Daycare-Report-Card-System'],
  skills:'Java | HTML | CSS | JavaScript | Javalin | PostgreSQL | Azure | Docker',
   category:'software',
    media:[
   {url: 'assets/images/projects/default.png', youtube:false}
 ]  },    { title: 'Project Lazy God',
 description: 'A top-down tower defense game where you play as the enemies that are preventing the heros from getting into your dungeon and stealing your resources, similar to the Dungeons series. From within the game, you are able to change and augment your boss, change and shape the terrain and place down towers on a grid.',
 info:['Github: <fa-icon [icon]="faGithub"></fa-icon>',
 'Github: <fa-icon [icon]="faGithub"></fa-icon>',
 'Github: <fa-icon [icon]="faGithub"></fa-icon>'],
 skills:'',
  category:'games',
   media:[
  {url: 'assets/images/projects/default.png', youtube:false}
]  },
  ];

  changeCategory(showString:string){
    this.showing = showString;
  }
}
