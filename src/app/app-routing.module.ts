import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/routes.module').then((m) => m.RoutesModule) },
  {
    path: 'security',
    loadChildren: () => import('./routes/security/security.module').then((m) => m.SecurityModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
