import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../core/api/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input()
  users: User[];

  @Input()
  offset = 0;

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
}
