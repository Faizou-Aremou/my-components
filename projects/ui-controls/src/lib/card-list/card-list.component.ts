import { Component, Input } from '@angular/core';
import { Card } from './card';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-card-list',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  sortCards(event: CdkDragDrop<HTMLDivElement[]>): void {
    console.log(event, 'CdkDragDrop');
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
