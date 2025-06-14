import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';
import { NewUserFormComponent } from '../../components/new-user-form/new-user-form.component';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss'],
  imports: [NewUserFormComponent],
})
export class CreateUserPageComponent implements OnInit, OnDestroy {
  constructor(
    private usersService: UsersService,
    private breadcrumbsService: BreadcrumbsService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/admin/users/create', name: 'Create' });
  }

  ngOnDestroy(): void {
    this.breadcrumbsService.pop();
  }

  onSubmit(user: NewUser) {
    this.usersService.create(user).subscribe(
      (createdUser) => {
        this.notificationService.success('User has been created');
        this.router.navigate(['/admin', 'users']);
      },
      (error) => this.notificationService.error(error.error.detail || error.error.title),
    );
  }
}
