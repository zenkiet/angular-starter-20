import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { provideIcons } from '@core/icon';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),

    provideHttpClient(),
    provideIcons([
      {
        name: 'heroicons_outline',
        url: 'icons/heroicons-outline.svg',
      },
      {
        name: 'heroicons_solid',
        url: 'icons/heroicons-solid.svg',
      },
    ]),
  ],
};
