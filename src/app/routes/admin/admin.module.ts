import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSettingsPageComponent } from './pages/admin-settings-page/admin-settings-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { BrowseUserPageComponent } from './pages/browse-user-page/browse-user-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminSettingsPageComponent,
    UsersPageComponent,
    BrowseUserPageComponent,
    UsersListPageComponent,
    CreateUserPageComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, CoreModule]
})
export class AdminModule {}
