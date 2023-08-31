import { Component, Input, ElementRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() mediaList: string[] = [];
  @Input() timerDuration: number = 10; // Timer duration in seconds

  mediaItems:string[] = [
    "pfp.png"
  ]

  isFullscreen = false;
  currentMediaIndex = 0;
  timerInterval: any; // Store timer interval reference

  constructor(youtubePlayerService:NgxYoutubePlayerModule) {}

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen) {
      document.documentElement.requestFullscreen();
      this.disableScroll();
    } else {
      document.exitFullscreen();
      this.enableScroll();
    }
  }

  playNextMedia() {
    this.pauseTimer();
    this.currentMediaIndex = (this.currentMediaIndex + 1) % this.mediaList.length;
    this.startTimer();
  }

  playPreviousMedia() {
    this.pauseTimer();
    this.currentMediaIndex = (this.currentMediaIndex - 1 + this.mediaList.length) % this.mediaList.length;
    this.startTimer();
  }

  isYouTubeMedia(index: number): boolean {
    return this.mediaList[index].includes('youtube.com');
  }

  isImageMedia(index: number): boolean {
    return this.mediaList[index].match(/\.(jpeg|jpg|gif|png)$/i) !== null;
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timerDuration -= 0.1;
      if (this.timerDuration <= 0) {
        this.playNextMedia();
      }
    }, 100);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflow = 'auto';
  }
}