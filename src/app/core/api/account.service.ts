import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, AccountUpdate, PasswordUpdate } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount(): Observable<Account> {
    return this.http.get<Account>('/api/account');
  }

  updateAccount(update: AccountUpdate): Observable<Account> {
    return this.http.put<Account>('/api/account', update);
  }

  updatePassword(password: PasswordUpdate): Observable<void> {
    return this.http.put<void>('/api/account/password', password);
  }
}
