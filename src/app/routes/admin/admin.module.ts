import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { BrowseUserPageComponent } from './pages/browse-user-page/browse-user-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    UsersPageComponent,
    BrowseUserPageComponent,
    UsersListPageComponent,
    CreateUserPageComponent,
    UsersListComponent,
    NewUserFormComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, CoreModule]
})
export class AdminModule {
}
