import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, CoreModule, UserInfoPageComponent],
})
export class UsersModule {}
