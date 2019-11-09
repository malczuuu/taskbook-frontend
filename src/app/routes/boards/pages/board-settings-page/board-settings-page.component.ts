import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-board-settings-page',
  templateUrl: './board-settings-page.component.html',
  styleUrls: ['./board-settings-page.component.scss']
})
export class BoardSettingsPageComponent implements OnInit, OnDestroy {
  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: 'settings', name: 'Settings' });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
