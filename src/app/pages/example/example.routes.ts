import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./example.component').then((m) => m.ExampleComponent),
  },
];

export default routes;
