import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview',
  },

  {
    path: 'overview',
    loadChildren: () => import('@pages/example/example.routes'),
  },

  /**
   * Not found route
   */
  {
    path: '**',
    loadChildren: () => import('@pages/not-found/not-found.routes'),
  },
];
