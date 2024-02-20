import { Component } from '@angular/core';
import { assassins } from './assassins';
import { Card, CardListComponent, CopyButtonComponent } from 'ui-controls';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent, CopyButtonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: Card[] = assassins;
  title: string = '';
  log(): void {
    alert(this.title + ' copied to the clipboard');
  }
}
