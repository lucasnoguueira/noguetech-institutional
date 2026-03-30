import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/sobre/sobre-page.component').then(m => m.SobrePageComponent),
  },
  {
    path: 'servicos',
    loadComponent: () =>
      import('./pages/servicos/servicos-page.component').then(m => m.ServicosPageComponent),
  },
  {
    path: 'projetos',
    loadComponent: () =>
      import('./pages/projetos/projetos-page.component').then(m => m.ProjetosPageComponent),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contato/contato-page.component').then(m => m.ContatoPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
