import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Credentials, Session } from '../../../../core/api/security.model';
import { SecurityService } from '../../../../core/api/security.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LoginPageComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private securityService: SecurityService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  onLogin() {
    const credentials = this.readForm();
    this.securityService.login(credentials).subscribe(
      (session) => this.onLoginSuccessful(session),
      (error) => this.notificationService.error('Bad credentials'),
    );
  }

  private onLoginSuccessful(session: Session) {
    this.securityService.storeSession(session);
    window.location.reload();
  }

  private readForm(): Credentials {
    return {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };
  }
}
