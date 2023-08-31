import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextHelperServiceService {
  private textSubject = new BehaviorSubject<string>('');
  private cursorSubject = new BehaviorSubject<boolean>(false);

  text$ = this.textSubject.asObservable();
  cursorVisible$ = this.cursorSubject.asObservable();

  constructor() {}

  animateText(text: string) {
    this.typeText(text);
  }

  private typeText(text: string) {
    let index = 0;
    const delay = 100; // Adjust the timing as needed

    const type = () => {
      if (index < text.length) {
        this.textSubject.next(text.substring(0, index + 1));
        index++;
        setTimeout(type, delay);
      } else {
        this.startCursorBlinking();
      }
    };

    type();
  }

  private startCursorBlinking() {
    setInterval(() => {
      this.cursorSubject.next(!this.cursorSubject.value);
    }, 500); // Adjust blinking speed as needed
  }

}
