import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../../../core/api/boards.model';
import { BoardsService } from '../../../../core/api/boards.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-board-settings-page',
  templateUrl: './board-settings-page.component.html',
  styleUrls: ['./board-settings-page.component.scss']
})
export class BoardSettingsPageComponent implements OnInit, OnDestroy {
  private boardUid = '';
  private board: Board;
  form: FormGroup;

  constructor(
    private boardsService: BoardsService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: 'settings', name: 'Settings' });

    this.form = new FormGroup({
      uid: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });

    this.route.parent.params.subscribe(params => {
      this.boardUid = params.board;
      this.fetchBoard();
    });
  }

  private fetchBoard() {
    this.boardsService.getOne(this.boardUid).subscribe(board => this.assignBoard(board));
  }

  private assignBoard(board: Board) {
    this.board = board;
    this.form = new FormGroup({
      uid: new FormControl(board.uid, [Validators.required]),
      name: new FormControl(board.name, [Validators.required]),
      description: new FormControl(board.description)
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onSave() {
    this.boardsService
      .update(this.boardUid, {
        name: this.form.get('name').value,
        description: this.form.get('description').value
      })
      .subscribe(board => this.assignBoard(board));
  }
}
