import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emptyPage, Page } from '../../../../core/api/core.model';
import { User } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
  standalone: false,
})
export class UsersListPageComponent implements OnInit {
  page = 0;
  size = 20;
  users: Page<User> = emptyPage<User>();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.usersService.getAll(this.page, this.size).subscribe((users) => (this.users = users));
  }

  onPageChange(page: number) {
    this.page = page - 1;
    this.fetchUsers();
  }

  onDelete(user: User) {
    this.usersService.deleteByUid(user.uid).subscribe(
      () => {
        this.fetchUsers();
        this.notificationService.success('User deleted');
      },
      (error) => this.notificationService.problem(error.error),
    );
  }

  onUpdate(user: User) {
    this.usersService.update(user.uid, user).subscribe(
      () => {
        this.fetchUsers();
        this.notificationService.success(`User role changed into ${user.role}`);
      },
      (error) => {
        this.notificationService.problem(error.error);
        this.fetchUsers();
      },
    );
  }
}
