import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';

import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Terrell Terry Portfolio';
  playerId = "1ozGKlOzEVc"
}
