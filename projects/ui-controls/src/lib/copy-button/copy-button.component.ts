import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'lib-copy-button',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss',
})
export class CopyButtonComponent {
  @Input() data = '';
  @Output() copied = new EventEmitter<void>();
}
