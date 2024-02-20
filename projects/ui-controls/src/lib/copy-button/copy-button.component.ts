import { Component, EventEmitter, Output, input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'lib-copy-button',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss',
})
export class CopyButtonComponent {
  data = input.required<string>();
  @Output() copied = new EventEmitter<void>();
  onCopy(): void {
    this.copied.next();
  }
}
