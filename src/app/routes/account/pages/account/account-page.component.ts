import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Account, AccountUpdate, PasswordUpdate } from '../../../../core/api/account.model';
import { AccountService } from '../../../../core/api/account.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { NotificationService } from '../../../../core/layout/notification/notification.service';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.scss'],
    standalone: false
})
export class AccountPageComponent implements OnInit, OnDestroy {
  account: Account;
  changePasswordVisible = false;
  accountForm: UntypedFormGroup;
  passwordForm: UntypedFormGroup;

  constructor(
    private accountService: AccountService,
    private breadcrumbsService: BreadcrumbsService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.accountService.getAccount().subscribe((account) => this.assignAccount(account));
    this.breadcrumbsService.push({ url: '/account', name: 'Account' });
    this.passwordForm = new UntypedFormGroup({
      oldPassword: new UntypedFormControl('', [Validators.required]),
      newPassword: new UntypedFormControl('', [Validators.required]),
      confirmNewPassword: new UntypedFormControl('', [Validators.required]),
    });
  }

  private assignAccount(account: Account) {
    this.account = account;
    this.accountForm = new UntypedFormGroup({
      uid: new UntypedFormControl(account.uid, [Validators.required]),
      email: new UntypedFormControl(account.email, [Validators.required]),
      role: new UntypedFormControl(account.role, [Validators.required]),
      firstName: new UntypedFormControl(account.first_name),
      lastName: new UntypedFormControl(account.last_name),
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onAccountSave() {
    const update: AccountUpdate = {
      email: this.accountForm.get('email').value,
      first_name: this.accountForm.get('firstName').value,
      last_name: this.accountForm.get('lastName').value,
    };
    this.accountService.updateAccount(update).subscribe(
      (account) => this.assignAccount(account),
      (error) => this.notificationService.error(error.error.detail)
    );
  }

  passwordSubmitValid(): boolean {
    return (
      this.passwordForm.valid &&
      this.passwordForm.get('newPassword').value ===
        this.passwordForm.get('confirmNewPassword').value
    );
  }

  onPasswordSave() {
    const password: PasswordUpdate = {
      old_password: this.passwordForm.get('oldPassword').value,
      new_password: this.passwordForm.get('newPassword').value,
    };
    this.accountService.updatePassword(password).subscribe(
      () => {
        this.passwordForm.get('oldPassword').setValue('');
        this.passwordForm.get('newPassword').setValue('');
        this.passwordForm.get('confirmNewPassword').setValue('');
        this.changePasswordVisible = false;
      },
      (error) => this.notificationService.error(error.error.detail)
    );
  }
}
