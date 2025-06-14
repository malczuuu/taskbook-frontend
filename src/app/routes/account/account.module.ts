import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountPageComponent } from './pages/account/account-page.component';

@NgModule({
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule, AccountPageComponent],
})
export class AccountModule {}
