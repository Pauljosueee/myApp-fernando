import { Routes } from '@angular/router';
import { canActivateGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/tabs/home/home.page').then((m) => m.HomePage),
    canActivate: [canActivateGuard],
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
    canActivate: [canActivateGuard],
  },
];
