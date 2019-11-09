import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardsService } from 'src/app/core/api/boards.service';
import { Board } from '../../../../core/api/boards.model';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';
import { MenuItem } from '../../../../core/layout/menu/menu.model';

@Component({
  selector: 'app-browse-board-page',
  templateUrl: './browse-board-page.component.html',
  styleUrls: ['./browse-board-page.component.scss']
})
export class BrowseBoardPageComponent implements OnInit, OnDestroy {
  menu: MenuItem[] = [{ url: 'issues', name: 'Issues' }, { url: 'settings', name: 'Settings' }];
  board: Board;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.boardsService
        .getOne(params.board)
        .subscribe(board => this.assignBoard(board), error => this.router.navigate(['/boards']))
    );
  }

  private assignBoard(board: Board) {
    this.board = board;
    this.breadcrumbsService.push({ url: `/boards/${board.uid}`, name: board.uid });
  }

  ngOnDestroy() {
    if (this.board !== null) {
      this.breadcrumbsService.pop();
    }
  }

  displayNameOf(board: Board): string {
    return board.name ? board.name : board.uid;
  }
}
