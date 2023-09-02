import { Component, Input, ElementRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {DomSanitizer} from '@angular/platform-browser';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player/public_api';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  mySanitizer:DomSanitizer;
  constructor(sanitizer:DomSanitizer){
    this.mySanitizer = sanitizer;
  }

  @Input() project:any;
  currentMedia:any = {url: "", youtube:false};
  currentIndex:number = 0;

  ngOnInit(){
    this.currentMedia = this.project.media[0];
  }

  nextSlide(num:number){
    if(this.currentIndex + num <= this.project.media.length-1 && this.currentIndex + num >= 0){
      this.currentIndex += num;
    }
    else if(this.currentIndex + num >= this.project.media.length){
      this.currentIndex = 0;
    }
    else if(this.currentIndex + num < 0){
      this.currentIndex = this.project.media.length-1;
    }
    this.currentMedia = this.project.media[this.currentIndex];
    console.log(this.currentIndex);

  }
}