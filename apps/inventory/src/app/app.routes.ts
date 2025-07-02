import { Route } from '@angular/router';
import { Welcome } from '../home/welcome';

export const appRoutes: Route[] = [
  { path: 'welcome', component: Welcome },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },{
    path: 'products',
    loadComponent: () => import('@angular-monorepo/products').then(m => m.Products)
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
