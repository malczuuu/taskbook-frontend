import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../../../core/api/boards.model';
import { BoardsService } from '../../../../core/api/boards.service';
import { BreadcrumbsService } from '../../../../core/layout/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-board-settings-page',
  templateUrl: './board-settings-page.component.html',
  styleUrls: ['./board-settings-page.component.scss'],
  standalone: false,
})
export class BoardSettingsPageComponent implements OnInit, OnDestroy {
  private boardUid = '';
  private board: Board;
  form: UntypedFormGroup;

  constructor(
    private boardsService: BoardsService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.breadcrumbsService.push({ url: 'settings', name: 'Settings' });

    this.form = new UntypedFormGroup({
      uid: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl(''),
    });

    this.route.parent.params.subscribe((params) => {
      this.boardUid = params.board;
      this.fetchBoard();
    });
  }

  private fetchBoard() {
    this.boardsService.getOne(this.boardUid).subscribe((board) => this.assignBoard(board));
  }

  private assignBoard(board: Board) {
    this.board = board;
    this.form = new UntypedFormGroup({
      uid: new UntypedFormControl(board.uid, [Validators.required]),
      name: new UntypedFormControl(board.name, [Validators.required]),
      description: new UntypedFormControl(board.description),
    });
  }

  ngOnDestroy() {
    this.breadcrumbsService.pop();
  }

  onSave() {
    this.boardsService
      .update(this.boardUid, {
        name: this.form.get('name').value,
        description: this.form.get('description').value,
      })
      .subscribe((board) => this.assignBoard(board));
  }
}
