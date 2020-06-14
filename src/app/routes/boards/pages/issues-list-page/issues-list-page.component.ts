import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { emptyPage, Page } from '../../../../core/api/core.model';
import { Issue } from '../../../../core/api/issues.model';
import { IssuesService } from '../../../../core/api/issues.service';
import { User } from '../../../../core/api/users.model';

@Component({
  selector: 'app-issues-list-page',
  templateUrl: './issues-list-page.component.html',
  styleUrls: ['./issues-list-page.component.scss'],
})
export class IssuesListPageComponent implements OnInit {
  issues: Page<Issue> = emptyPage<Issue>();
  board = '';
  page = 0;
  size = 20;

  constructor(private issuesService: IssuesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      this.board = params.board;
      this.fetchIssues();
    });
  }

  private fetchIssues() {
    this.issuesService
      .getAll(this.board, this.page, this.size)
      .subscribe((issues) => (this.issues = issues));
  }

  nameOf(user: User): string {
    let name = `${user.first_name.trim()} ${user.last_name.trim()}`.trim();
    if (name.length === 0) {
      name = `unknown (${user.email})`;
    }
    return name;
  }

  onPageChange(page: number) {
    this.page = page - 1;
    this.fetchIssues();
  }
}
