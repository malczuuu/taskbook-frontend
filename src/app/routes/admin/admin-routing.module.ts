import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSettingsPageComponent } from './pages/admin-settings-page/admin-settings-page.component';
import { BrowseUserPageComponent } from './pages/browse-user-page/browse-user-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', component: AdminSettingsPageComponent },
      {
        path: 'users',
        component: UsersPageComponent,
        children: [
          { path: '', component: UsersListPageComponent, pathMatch: 'full' },
          { path: 'create', component: CreateUserPageComponent },
          { path: ':uid', component: BrowseUserPageComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
