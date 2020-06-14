import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../../core/guards/logged-in.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'boards',
        loadChildren: () => import('../boards/boards.module').then((m) => m.BoardsModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
