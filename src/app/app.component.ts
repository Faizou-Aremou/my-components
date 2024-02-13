import { Component } from '@angular/core';
import { assassins } from './assassins';
import { Card } from 'ui-controls';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: Card[] = assassins;
}
