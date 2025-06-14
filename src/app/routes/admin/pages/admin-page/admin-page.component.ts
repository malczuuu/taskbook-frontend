import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { MenuItem } from '../../../../core/layout/menu/menu.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  imports: [RouterOutlet],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  menu: MenuItem[] = [{ url: 'users', name: 'Users' }];

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/admin', name: 'Admin' });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
