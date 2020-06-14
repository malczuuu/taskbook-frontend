import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserInfoPageComponent],
  imports: [CommonModule, UsersRoutingModule, CoreModule],
})
export class UsersModule {}
