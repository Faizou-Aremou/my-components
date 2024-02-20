import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  EnvironmentInjector,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { createCustomElement } from '@angular/elements';
import { CopyButtonComponent } from 'ui-controls';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        const parentInjector = inject(EnvironmentInjector);
        const el = createCustomElement(CopyButtonComponent, {
          injector: parentInjector,
        });
        customElements.define('copy-button', el);
      },
    },
  ],
};
