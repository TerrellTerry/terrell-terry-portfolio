import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextAnimation]'
})
export class TextAnimationDirective {
  @Input() text: string = '';
  @Input() delay: number = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.animateText(0);
  }

  private animateText(index: number) {
    if (index < this.text.length) {
      setTimeout(() => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          this.text.substr(0, index + 1)
        );
        this.animateText(index + 1);
      }, this.delay);
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'innerHTML',
        this.text+=(`<b *ngIf="showCursor" class="cursor"> _ </b>`)
      );
    }
  }
}
