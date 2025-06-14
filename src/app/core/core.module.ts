import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  exports: [BreadcrumbsComponent, MenuComponent, NgbPaginationModule],
  imports: [CommonModule, RouterModule, NgbPaginationModule, BreadcrumbsComponent, MenuComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class CoreModule {}
