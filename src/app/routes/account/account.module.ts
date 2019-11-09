import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountPageComponent } from './pages/account/account-page.component';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule]
})
export class AccountModule {}
