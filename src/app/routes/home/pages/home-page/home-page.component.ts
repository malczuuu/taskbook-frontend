import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Account } from '../../../../core/api/account.model';
import { AccountService } from '../../../../core/api/account.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  className = 'd-flex flex-column h-100';

  private since = 2019;
  year = '2019';
  account: Account;

  constructor(
    private breadcrumbsService: BreadcrumbsService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.accountService.getAccount().subscribe((account) => (this.account = account));
    this.breadcrumbsService.push({ url: '/', name: 'Home' });
    const now = moment();

    if (now.year() > this.since) {
      this.year = `2019−${now.year()}`;
    }
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
