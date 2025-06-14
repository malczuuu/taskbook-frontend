import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NewUser } from '../../../../core/api/users.model';

@Component({
    selector: 'app-new-user-form',
    templateUrl: './new-user-form.component.html',
    styleUrls: ['./new-user-form.component.scss'],
    standalone: false
})
export class NewUserFormComponent implements OnInit {
  form: UntypedFormGroup;

  @Output()
  save: EventEmitter<NewUser> = new EventEmitter<NewUser>();

  constructor() {}

  ngOnInit() {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required]),
      role: new UntypedFormControl('user', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      confirmPassword: new UntypedFormControl('', [Validators.required]),
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
    });
  }

  isValid(): boolean {
    const formValid = this.form.valid;
    return formValid && this.arePasswordsCorrect();
  }

  arePasswordsCorrect(): boolean {
    return this.form.get('password').value === this.form.get('confirmPassword').value;
  }

  onSubmit() {
    this.save.emit({
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      role: this.form.get('role').value,
      first_name: this.form.get('firstName').value,
      last_name: this.form.get('lastName').value,
    });
  }
}
