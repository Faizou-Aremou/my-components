import { Component, EnvironmentInjector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterOutlet } from '@angular/router';
import { CopyButtonComponent } from 'ui-controls';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CopyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui-elements';
  constructor(private injector: EnvironmentInjector) {}
}
