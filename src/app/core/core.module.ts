import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpSessionInterceptor } from './http/http-session-interceptor.service';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [BreadcrumbsComponent, MenuComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, NgbPaginationModule],
  exports: [BreadcrumbsComponent, MenuComponent, NgbPaginationModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpSessionInterceptor, multi: true }],
})
export class CoreModule {}
