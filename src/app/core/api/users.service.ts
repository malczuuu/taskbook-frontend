import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './core.model';
import { NewUser, User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 0, size: number = 20): Observable<Page<User>> {
    return this.http.get<Page<User>>('/api/users', {
      params: { page: page.toString(), size: size.toString() }
    });
  }

  getAllByQuery(query: string): Observable<Page<User>> {
    return this.http.get<Page<User>>('/api/users/search', {
      params: { query }
    });
  }

  getOne(uid: string): Observable<User> {
    return this.http.get<User>(`/api/users/${uid}`);
  }

  create(user: NewUser): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  deleteByUid(uid: string): Observable<void> {
    return this.http.delete<void>(`/api/users/${uid}`);
  }

  update(uid: string, user: User): Observable<User> {
    return this.http.put<User>(`/api/users/${uid}`, user);
  }
}
