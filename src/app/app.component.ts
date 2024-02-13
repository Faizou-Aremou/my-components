import { Component } from '@angular/core';
import { assassins } from './assassins';
import { Card, CardListComponent } from 'ui-controls';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: Card[] = assassins;
}
