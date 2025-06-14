import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    LoginPageComponent,
    LogoutPageComponent,
  ],
})
export class SecurityModule {}
