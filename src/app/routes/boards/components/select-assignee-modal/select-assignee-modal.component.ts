import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/api/users.model';
import { emptyPage, Page } from '../../../../core/api/core.model';
import { UsersService } from '../../../../core/api/users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-select-assignee-modal',
  templateUrl: './select-assignee-modal.component.html',
  styleUrls: ['./select-assignee-modal.component.scss'],
  imports: [ReactiveFormsModule, NgFor],
})
export class SelectAssigneeModalComponent implements OnInit {
  users: Page<User> = emptyPage();
  form: UntypedFormGroup;
  query = '';

  constructor(
    private usersService: UsersService,
    private modal: NgbActiveModal,
  ) {}

  ngOnInit() {
    this.form = new UntypedFormGroup({ query: new UntypedFormControl('') });
    this.fetch();
  }

  fetch() {
    this.usersService.getAllByQuery(this.query).subscribe((users) => (this.users = users));
  }

  onSubmit() {
    this.query = this.form.get('query').value;
    this.fetch();
  }

  select(user: User) {
    this.modal.close(user);
  }

  dismiss() {
    this.modal.dismiss();
  }
}
