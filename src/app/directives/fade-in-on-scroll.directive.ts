  import { Directive, ElementRef, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';

  @Directive({
    selector: '[appFadeInOnScroll]'
  })
  export class FadeInOnScrollDirective implements OnInit {
    @Output() finishedFadingEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    appearOptions = {
      threshold: 1,
      rootMargin: "0px 0px 100px 0px"
    };
  
    ngOnInit() {
      const appearOnScroll = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.renderer.addClass(entry.target, 'appear');
              observer.unobserve(entry.target);
              this.finishedFadingEvent.emit(true);
            }
          });
        },
        this.appearOptions
      );
  
      appearOnScroll.observe(this.elementRef.nativeElement);
    }
  }