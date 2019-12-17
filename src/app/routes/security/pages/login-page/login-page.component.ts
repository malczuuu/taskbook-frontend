import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials, Session } from '../../../../core/api/security.model';
import { SecurityService } from '../../../../core/api/security.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private securityService: SecurityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    const credentials = this.readForm();
    this.securityService
      .login(credentials)
      .subscribe(
        session => this.onLoginSuccessful(session),
        error => this.notificationService.error('Bad credentials')
      );
  }

  private onLoginSuccessful(session: Session) {
    this.securityService.storeSession(session);
    window.location.reload();
  }

  private readForm(): Credentials {
    return {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
  }
}
