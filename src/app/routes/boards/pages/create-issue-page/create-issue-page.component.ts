import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewIssue } from '../../../../core/api/issues.model';
import { IssuesService } from '../../../../core/api/issues.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-create-issue-page',
  templateUrl: './create-issue-page.component.html',
  styleUrls: ['./create-issue-page.component.scss'],
  imports: [ReactiveFormsModule],
})
export class CreateIssuePageComponent implements OnInit, OnDestroy {
  board: string;
  form: UntypedFormGroup;

  constructor(
    private issueService: IssuesService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      this.board = params.board;
      this.breadcrumbsService.push({ url: `/boards/${this.board}/issues/create`, name: 'Create' });
    });
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl(''),
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onSave() {
    this.issueService.create(this.board, this.readNewIssue()).subscribe(
      (issue) => this.router.navigate([`/boards/${this.board}/issues`]),
      (error) => this.notificationService.error(error.error.detail || error.error.title),
    );
  }

  private readNewIssue(): NewIssue {
    return {
      title: this.form.get('title').value,
      detail: this.form.get('description').value,
      status: 'to_do',
      assignee: null,
    };
  }
}
