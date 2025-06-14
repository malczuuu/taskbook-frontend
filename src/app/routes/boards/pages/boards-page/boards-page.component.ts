import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss'],
  imports: [RouterOutlet],
})
export class BoardsPageComponent implements OnInit, OnDestroy {
  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/boards', name: 'Boards' });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
