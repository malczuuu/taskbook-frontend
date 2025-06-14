import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../core/api/users.model';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  imports: [NgFor, ReactiveFormsModule],
})
export class UsersListComponent {
  @Input()
  users: User[];

  @Input()
  offset = 0;

  @Output()
  update: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  browse: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  delete: EventEmitter<User> = new EventEmitter<User>();

  onBrowseClick(user: User) {
    this.browse.emit(user);
  }

  indexOf(index: number): number {
    return index + this.offset;
  }

  userDeleteClick(user: User) {
    this.delete.emit(user);
  }

  onRoleSelect(user: User, role: string) {
    this.update.emit({
      uid: user.uid,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role,
    });
  }
}
