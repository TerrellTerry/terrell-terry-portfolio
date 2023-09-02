import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent {
  isAtTop:boolean = true;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
  // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
   if(pos <= 931)   {
   //Do your action here
   this.isAtTop = true;
   }
   else{
    this.isAtTop = false;
   }
  }
  
  scrollToTop(){
    const targetElement = document.documentElement.querySelector('#navbar');
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
}
