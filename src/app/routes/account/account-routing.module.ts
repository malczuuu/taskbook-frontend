import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account/account-page.component';

const routes: Routes = [{ path: '', component: AccountPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
