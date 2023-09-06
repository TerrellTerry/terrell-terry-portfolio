import { Component } from '@angular/core';
import { TextHelperServiceService } from 'src/app/services/text-helper-service.service';

@Component({
  selector: 'app-bio-about-me',
  templateUrl: './bio-about-me.component.html',
  styleUrls: ['./bio-about-me.component.css']
})
export class BioAboutMeComponent {
  showCursor:boolean = false;
  text:string = `
    
  My name is Terrell Terry, a full stack 
  developer and game developer that thrives on creating 
  engaging user experiences within websites and video games alike.
   I pride myself on being able to collaborate effectively and create clean, 
   readable and reusable code. Spending my time enjoying and analyzing video games, 
   creating new applications and websites, I have an arsenal of knowledge that I'm always willing to build upon and share.
<br>
<br>
  My strengths lie in programming, systems design, backend and collaboration.
   Seeking to further expand upon those skills and grow as a person and programmer alike.
<br>
<br>
  I possess a deep drive to build applications from the ground up or jumping into a project that's actively being worked on, my mission is to integrate into teams effectively and efficiently.
   I hope to hear from you soon, if you want to know more about me and what I can do, contact me.

`; // Replace with your desired text;
  showCard:boolean = false;
  cursorVisible:boolean = false;
  constructor(){}

  ngOnInit(){
    this.showCard = true;
  }
}

