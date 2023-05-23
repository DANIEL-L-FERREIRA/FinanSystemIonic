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
    path: 'lancarreceita',
    loadComponent: () => import('./lancarreceita/lancarreceita.page').then( m => m.LancarreceitaPage)
  },
  {
    path: 'baixareceber',
    loadComponent: () => import('./baixareceber/baixareceber.page').then( m => m.BaixareceberPage)
  },
  {
    path: 'contas-pagar',
    loadComponent: () => import('./contas-pagar/contas-pagar.page').then( m => m.ContasPagarPage)
  },
  {
    path: 'cadastrofornecedor',
    loadComponent: () => import('./cadastrofornecedor/cadastrofornecedor.page').then( m => m.CadastrofornecedorPage)
  },
  {
    path: 'tipodespesa',
    loadComponent: () => import('./tipodespesa/tipodespesa.page').then( m => m.TipodespesaPage)
  },
  {
    path: 'lancardespesa',
    loadComponent: () => import('./lancardespesa/lancardespesa.page').then( m => m.LancardespesaPage)
  },
  {
    path: 'baixapagar',
    loadComponent: () => import('./baixapagar/baixapagar.page').then( m => m.BaixapagarPage)
  },
];
