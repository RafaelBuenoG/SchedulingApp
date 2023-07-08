import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'estabelecimentos',
    loadChildren: () => import('./estabelecimentos/estabelecimentos.module').then( m => m.EstabelecimentosPageModule)
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
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
