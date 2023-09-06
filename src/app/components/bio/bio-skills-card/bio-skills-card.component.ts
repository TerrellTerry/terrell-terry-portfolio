import { Component } from '@angular/core';

import { TextHelperServiceService } from 'src/app/services/text-helper-service.service';


@Component({
  selector: 'app-bio-skills-card',
  templateUrl: './bio-skills-card.component.html',
  styleUrls: ['./bio-skills-card.component.css']
})
export class BioSkillsCardComponent {
  delay:number = 25;
  text:string = '';
  showCursor:boolean = false;
  fadedIn:boolean = false;

  softwareSkillsText = [
    {title: 'Backend', skills:'Java | C# | Python | Spring Framework | JDBC | Javalin | Flask |'
    +' TDD | Microsoft Azure |'
  +' AWS (Amazon Web Services) | Docker'},
  {title: 'Frontend', skills:'Angular | React | HTML | CSS | JavaScript | TypeScript'},
  {title: 'Databases', skills:'PostgreSQL | MySQL | MongoDB'},
  {title: 'Supporting Tech', skills:'Gradle | Maven | Node.js | Postman | JSON | SonarCloud | Github | Git | Perforce | JUnit'}
];
  gamesSkillsText = [
    {title: 'Technical', skills:'C# | Unity | Unreal Engine | Unity Animation | AI Programming'},
  {title: 'Core Design', skills:'Game Mechanics | Prototyping | Game Balancing | UX | Level Design | Game Design Documentation'},
  {title: 'Testing and Iteration', skills:'Playtesting | Feedback Analysis | User Research | UX Iteration | Version Control'},
  {title: 'Communication and Collaboration', skills:'Teamwork | Cross-Functional Collaboration | Clear Communication | Organization | Team-Building | Leadership'}
  ];

  isShowingSoftware:boolean = true;

  constructor(){}

  ngOnInit(){
  }

  selectedCategory:string = 'software'; // Initialize to an empty string

  changeCategory(category: string) {
    this.selectedCategory = category;
    this.isShowingSoftware = category === 'software';
    this.showCursor = false;
  }

  handleFinishedFadingEvent(value:boolean){
    this.fadedIn = value;
  }

}
