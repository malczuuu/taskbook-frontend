import { Component, OnInit } from '@angular/core';
import { Board } from '../../../../core/api/boards.model';
import { BoardsService } from '../../../../core/api/boards.service';
import { emptyPage, Page } from '../../../../core/api/core.model';

@Component({
    selector: 'app-boards-list-page',
    templateUrl: './boards-list-page.component.html',
    styleUrls: ['./boards-list-page.component.scss'],
    standalone: false
})
export class BoardsListPageComponent implements OnInit {
  boards: Page<Board> = emptyPage();

  constructor(private boardsService: BoardsService) {}

  ngOnInit() {
    this.boardsService.getAll().subscribe((boards) => (this.boards = boards));
  }

  displayNameOf(board: Board): string {
    return board.name ? board.name : board.uid;
  }
}
