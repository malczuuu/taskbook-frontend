import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emptyPage, Page } from '../../../../core/api/core.model';
import { User } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent implements OnInit {
  page = 0;
  size = 20;
  users: Page<User> = emptyPage<User>();

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.usersService.getAll(this.page, this.size).subscribe(users => (this.users = users));
  }

  onPageChange(page: number) {
    this.page = page - 1;
    this.fetchUsers();
  }
}
