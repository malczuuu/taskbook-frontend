import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials, Session } from './security.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private readonly sessionTokenKey = 'session.token';
  private readonly storage: Storage = localStorage;

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<Session> {
    return this.http.post<Session>('/api/login', credentials);
  }

  storeSession(session: Session) {
    this.storage.setItem(this.sessionTokenKey, session.token);
  }

  getSession(): string | null {
    const token = this.storage.getItem(this.sessionTokenKey);
    if (token !== null) {
      return token;
    }
    return null;
  }

  clearSession(): string | null {
    const token = this.storage.getItem(this.sessionTokenKey);
    if (token !== null) {
      this.storage.removeItem(this.sessionTokenKey);
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.storage.getItem(this.sessionTokenKey) !== null;
  }
}
