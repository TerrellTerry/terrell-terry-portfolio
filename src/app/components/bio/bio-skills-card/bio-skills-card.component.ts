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

  softwareSkillsText:string = 'Java | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
  +' Skill | Skill | Skill | Skill'; // Replace with your desired text
  gamesSkillsText:string = 'C# | Skill | Skill | Skill | Skill | Skill | Skill | Skill |'
  +' Skill | Skill | Skill | Skill'

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
