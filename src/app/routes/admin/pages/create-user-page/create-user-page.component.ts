import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../../../../core/api/users.model';
import { UsersService } from '../../../../core/api/users.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private breadcrumbsService: BreadcrumbsService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: '/admin/users/create', name: 'Create' });
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      role: new FormControl('user', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  ngOnDestroy(): void {
    this.breadcrumbsService.pop();
  }

  onSubmit() {
    const user: NewUser = {
      email: this.form.get('email').value,
      role: this.form.get('role').value,
      password: this.form.get('password').value,
      first_name: this.form.get('firstName').value,
      last_name: this.form.get('lastName').value
    };
    this.usersService.create(user).subscribe(
      createdUser => {
        this.notificationService.success('User has been created');
        this.router.navigate(['/admin', 'users']);
      },
      error => this.notificationService.error(error.error.detail || error.error.title)
    );
  }
}
