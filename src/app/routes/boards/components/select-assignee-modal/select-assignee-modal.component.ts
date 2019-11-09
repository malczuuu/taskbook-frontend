import { Page, emptyPage } from '../../../../core/api/core.model';
import { UsersService } from '../../../../core/api/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/api/users.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-assignee-modal',
  templateUrl: './select-assignee-modal.component.html',
  styleUrls: ['./select-assignee-modal.component.scss']
})
export class SelectAssigneeModalComponent implements OnInit {
  users: Page<User> = emptyPage();

  constructor(private usersService: UsersService, private modal: NgbActiveModal) {}

  ngOnInit() {
    this.fetch('');
  }

  fetch(text: string) {
    this.usersService.getAllByQuery(text).subscribe(users => (this.users = users));
  }

  select(user: User) {
    this.modal.close(user);
  }

  dismiss() {
    this.modal.dismiss();
  }
}
