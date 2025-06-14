import { User } from 'src/app/core/api/users.model';
import {
  UntypedFormGroup,
  Validators,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Comment, NewComment } from '../../../../core/api/comments.model';
import { Page, emptyPage } from '../../../../core/api/core.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
  imports: [ReactiveFormsModule, NgFor, RouterLink, NgbPagination],
})
export class CommentSectionComponent implements OnInit {
  @Input()
  comments: Page<Comment> = emptyPage<Comment>();

  @Output()
  save: EventEmitter<NewComment> = new EventEmitter<NewComment>();

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  form: UntypedFormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new UntypedFormGroup({
      content: new UntypedFormControl('', [Validators.required]),
    });
  }

  formValid(): boolean {
    return this.form.valid && this.form.get('content').value.trim().length > 0;
  }

  onSaveClick() {
    this.save.emit({ content: this.form.get('content').value.trim() });
  }

  clear() {
    this.form.get('content').setValue('');
  }

  authorAsString(author: User): string {
    return `${this.nameOf(author)} <${author.email}>`.trim();
  }

  private nameOf(user: User): string {
    return `${user.first_name} ${user.last_name}`.trim();
  }

  onPageChange(page: number) {
    this.pageChange.emit(page - 1);
  }
}
