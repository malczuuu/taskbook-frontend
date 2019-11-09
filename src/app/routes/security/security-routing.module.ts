import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../../core/guards/logged-in.guard';
import { LoggedOutGuard } from '../../core/guards/logged-out.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, canActivate: [LoggedOutGuard] },
  { path: 'logout', component: LogoutPageComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
