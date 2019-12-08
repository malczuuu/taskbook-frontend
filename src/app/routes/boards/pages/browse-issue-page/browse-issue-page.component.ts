import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Issue, IssueUpdate } from '../../../../core/api/issues.model';
import { IssuesService } from '../../../../core/api/issues.service';
import { User } from '../../../../core/api/users.model';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';
import { SelectAssigneeModalComponent } from '../../components/select-assignee-modal/select-assignee-modal.component';

@Component({
  selector: 'app-browse-issue-page',
  templateUrl: './browse-issue-page.component.html',
  styleUrls: ['./browse-issue-page.component.scss']
})
export class BrowseIssuePageComponent implements OnInit, OnDestroy {
  board: string;
  issue: Issue;
  form: FormGroup;
  assignee: User;

  constructor(
    private issuesService: IssuesService,
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe(parentParams => {
      this.board = parentParams.board;
      this.route.params.subscribe(params => this.fetchIssue(params.issue));
    });
  }

  private fetchIssue(uid: string) {
    this.issuesService.getOne(this.board, uid).subscribe(issue => {
      this.onIssueFetched(issue);
      this.breadcrumbsService.push({
        url: `/boards/${this.board}/issues/${this.issue.uid}`,
        name: this.issue.uid
      });
    });
  }

  private onIssueFetched(issue: Issue) {
    this.issue = issue;
    this.assign(issue.assignee);
    this.form = new FormGroup({
      title: new FormControl(this.issue.title),
      status: new FormControl(this.issue.status),
      description: new FormControl(this.issue.detail)
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onSave() {
    this.issuesService.update(this.board, this.issue.uid, this.readForm()).subscribe(
      issue => {
        this.notificationService.success('Issue updated successfully');
        this.issue = issue;
      },
      error => this.notificationService.error(error.error.detail || error.error.title)
    );
  }

  private readForm(): IssueUpdate {
    return {
      title: this.form.get('title').value,
      status: this.form.get('status').value,
      detail: this.form.get('description').value,
      assignee: this.assignee !== null ? this.assignee.uid : null
    };
  }

  selectAssignee() {
    const modal: NgbModalRef = this.modalService.open(SelectAssigneeModalComponent);
    modal.result.then(result => this.assign(result), () => {});
  }

  private assign(assignee: User) {
    this.assignee = assignee;
  }

  assigneeAsString(): string {
    if (this.assignee) {
      return `${this.nameOfAssignee()} <${this.assignee.email}>`.trim();
    } else {
      return '(unassigned)';
    }
  }

  private nameOfAssignee(): string {
    return `${this.assignee.first_name} ${this.assignee.last_name}`.trim();
  }
}
