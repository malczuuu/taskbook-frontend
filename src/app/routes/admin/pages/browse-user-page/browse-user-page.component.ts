import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-browse-user-page',
  templateUrl: './browse-user-page.component.html',
  styleUrls: ['./browse-user-page.component.scss'],
  imports: [NgIf, JsonPipe],
})
export class BrowseUserPageComponent implements OnInit, OnDestroy {
  user: User = null;

  constructor(
    private usersService: UsersService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => this.fetchUser(params.uid));
  }

  private fetchUser(uid: string) {
    this.usersService.getOne(uid).subscribe((user) => this.assignUser(user));
  }

  private assignUser(user: User) {
    this.user = user;
    this.breadcrumbsService.push({
      url: `/admin/users/${user.uid}`,
      name: this.nameOfUser(),
    });
  }

  private nameOfUser(): string {
    let name = `${this.user.first_name} ${this.user.last_name}`.trim();
    if (name.length === 0) {
      name = this.user.email;
    }
    if (name.length > 18) {
      name = `${name.substring(0, 15)}...`;
    }
    return name;
  }

  ngOnDestroy() {
    if (this.user) {
      this.breadcrumbsService.pop();
    }
  }
}
