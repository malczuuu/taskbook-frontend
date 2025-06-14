import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Board } from '../../../../core/api/boards.model';
import { BoardsService } from '../../../../core/api/boards.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-create-board-page',
  templateUrl: './create-board-page.component.html',
  styleUrls: ['./create-board-page.component.scss'],
  imports: [ReactiveFormsModule],
})
export class CreateBoardPageComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;

  constructor(
    private boardsService: BoardsService,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/boards/create', name: 'Create' });
    this.form = new UntypedFormGroup({
      uid: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl(''),
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onSave() {
    this.boardsService.create(this.readBoard()).subscribe(
      (board) => this.router.navigate(['/boards', board.uid]),
      (error) => this.notificationService.error(error.error.detail || error.error.title),
    );
  }

  private readBoard(): Board {
    return {
      uid: this.form.get('uid').value,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
    };
  }
}
