import { Comment, NewComment } from './comments.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from './core.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  findAll(
    board: string,
    issue: string,
    page: number = 0,
    size: number = 20
  ): Observable<Page<Comment>> {
    return this.http.get<Page<Comment>>(`/api/boards/${board}/issues/${issue}/comments`, {
      params: { page: page.toString(), size: size.toString() },
    });
  }

  findOne(board: string, issue: string, uid: string): Observable<Comment> {
    return this.http.get<Comment>(`/api/boards/${board}/issues/${issue}/comments/${uid}`);
  }

  create(board: string, issue: string, comment: NewComment): Observable<Comment> {
    return this.http.post<Comment>(`/api/boards/${board}/issues/${issue}/comments`, comment);
  }
}
