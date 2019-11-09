import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { emptyPage, Page } from '../../../../core/api/core.model';
import { Issue } from '../../../../core/api/issues.model';
import { IssuesService } from '../../../../core/api/issues.service';

@Component({
  selector: 'app-issues-list-page',
  templateUrl: './issues-list-page.component.html',
  styleUrls: ['./issues-list-page.component.scss']
})
export class IssuesListPageComponent implements OnInit {
  issues: Page<Issue> = emptyPage<Issue>();

  constructor(private issuesService: IssuesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params =>
      this.issuesService.getAll(params.board).subscribe(issues => (this.issues = issues))
    );
  }
}
