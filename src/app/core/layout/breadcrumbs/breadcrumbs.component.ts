import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breadcrumb } from './breadcrumbs.model';
import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    const subscription = this.breadcrumbsService
      .getBreadcrumbs()
      .subscribe((breadcrumbs) => (this.breadcrumbs = breadcrumbs));
    this.subscriptions.push(subscription);
    this.breadcrumbs = this.breadcrumbsService.peek();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  isLast(breadcrumb: Breadcrumb): boolean {
    return this.breadcrumbs.indexOf(breadcrumb) === this.breadcrumbs.length - 1;
  }
}
