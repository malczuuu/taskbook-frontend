import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
  standalone: false,
})
export class UserInfoPageComponent implements OnInit, OnDestroy {
  userUid = '';
  user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userUid = params.user;
      this.fetchUser();
    });
  }

  fetchUser() {
    this.usersService.getOne(this.userUid).subscribe((user) => this.assignUser(user));
  }

  private assignUser(user: User) {
    this.user = user;
    this.breadcrumbsService.push({ url: `/users/${this.userUid}`, name: 'Users' });
    this.breadcrumbsService.push({ url: `/users/${this.userUid}`, name: this.nameOfUser() });
  }

  ngOnDestroy() {
    if (this.user !== null) {
      this.breadcrumbsService.pop();
      this.breadcrumbsService.pop();
    }
  }

  userAsString(): string {
    if (this.user) {
      return `${this.nameOfUser()} <${this.user.email}>`.trim();
    } else {
      return '(unassigned)';
    }
  }

  private nameOfUser(): string {
    return `${this.user.first_name} ${this.user.last_name}`.trim();
  }
}
