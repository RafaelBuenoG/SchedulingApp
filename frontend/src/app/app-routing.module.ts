import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'minhas-agendas',
    loadChildren: () => import('./minhas-agendas/minhas-agendas.module').then( m => m.MinhasAgendasPageModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./agendamentos/agendar-list/agendar-list.module').then( m => m.AgendarListPageModule)
  },
  {
    path: 'agendamentos/new/:id',
    loadChildren: () => import('./agendamentos/agendar-form/agendar-form.module').then( m => m.AgendarFormPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
