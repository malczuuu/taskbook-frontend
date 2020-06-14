import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board, BoardUpdate } from './boards.model';
import { Page } from './core.model';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 0, size: number = 20): Observable<Page<Board>> {
    return this.http.get<Page<Board>>('/api/boards', {
      params: { page: page.toString(), size: size.toString() },
    });
  }

  getOne(board: string): Observable<Board> {
    return this.http.get<Board>(`/api/boards/${board}`);
  }

  create(board: Board): Observable<Board> {
    return this.http.post<Board>('/api/boards', board);
  }

  update(uid: string, board: BoardUpdate): Observable<Board> {
    return this.http.put<Board>(`/api/boards/${uid}`, board);
  }
}
