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
      { path: 'account', loadChildren: '../account/account.module#AccountModule' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: 'boards', loadChildren: '../boards/boards.module#BoardsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
