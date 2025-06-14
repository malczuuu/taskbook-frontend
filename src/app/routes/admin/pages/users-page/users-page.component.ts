import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
    standalone: false
})
export class UsersPageComponent implements OnInit, OnDestroy {
  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/admin/users', name: 'Users' });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
