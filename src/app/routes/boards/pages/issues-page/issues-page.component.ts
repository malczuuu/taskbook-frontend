import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-issues-page',
  templateUrl: './issues-page.component.html',
  styleUrls: ['./issues-page.component.scss']
})
export class IssuesPageComponent implements OnInit, OnDestroy {
  board: string;

  constructor(private breadcrumbsService: BreadcrumbsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.board = params.board;
      this.breadcrumbsService.push({ url: `/boards/${this.board}/issues`, name: 'Issues' });
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }
}
