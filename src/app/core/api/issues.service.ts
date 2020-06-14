import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from './core.model';
import { Issue, IssueUpdate, NewIssue } from './issues.model';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private http: HttpClient) {}

  getAll(board: string, page: number = 0, size: number = 20): Observable<Page<Issue>> {
    return this.http.get<Page<Issue>>(`/api/boards/${board}/issues`, {
      params: { page: page.toString(), size: size.toString() },
    });
  }

  getOne(board: string, issue: string): Observable<Issue> {
    return this.http.get<Issue>(`/api/boards/${board}/issues/${issue}`);
  }

  count(board: string): Observable<number> {
    return this.http
      .get<Page<Issue>>(`/api/boards/${board}/issues`, { params: { page: '0', size: '1' } })
      .pipe(map((page) => page.total_elements));
  }

  create(board: string, issue: NewIssue): Observable<Issue> {
    return this.http.post<Issue>(`/api/boards/${board}/issues`, issue);
  }

  update(board: string, uid: string, issue: IssueUpdate) {
    return this.http.put<Issue>(`/api/boards/${board}/issues/${uid}`, issue);
  }
}
