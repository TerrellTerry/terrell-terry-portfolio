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
    
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <br>
  <br>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <br>
  <br>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <br>
  <br>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <br>
  <br>
  Want to know more about me and what I can do? Contact me (link)

`; // Replace with your desired text;
  showCard:boolean = false;
  cursorVisible:boolean = false;
  constructor(){}

  ngOnInit(){
    this.showCard = true;
  }
}

