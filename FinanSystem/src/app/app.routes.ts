import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'contas-receber',
    loadComponent: () => import('./contas-receber/contas-receber.page').then( m => m.ContasReceberPage)
  },
  {
    path: 'cadastrocliente',
    loadComponent: () => import('./cadastrocliente/cadastrocliente.page').then( m => m.CadastroclientePage)
  },
  {
    path: 'tiporeceita',
    loadComponent: () => import('./tiporeceita/tiporeceita.page').then( m => m.TiporeceitaPage)
  },
  {
    path: 'receita',
    loadComponent: () => import('./receita/receita.page').then( m => m.ReceitaPage)
  },
];
