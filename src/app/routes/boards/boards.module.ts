import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { CreateBoardPageComponent } from './pages/create-board-page/create-board-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseBoardPageComponent } from './pages/browse-board-page/browse-board-page.component';
import { IssuesPageComponent } from './pages/issues-page/issues-page.component';
import { CreateIssuePageComponent } from './pages/create-issue-page/create-issue-page.component';
import { BoardsListPageComponent } from './pages/boards-list-page/boards-list-page.component';
import { IssuesListPageComponent } from './pages/issues-list-page/issues-list-page.component';
import { BoardSettingsPageComponent } from './pages/board-settings-page/board-settings-page.component';
import { BrowseIssuePageComponent } from './pages/browse-issue-page/browse-issue-page.component';
import { SelectAssigneeModalComponent } from './components/select-assignee-modal/select-assignee-modal.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';

@NgModule({
  declarations: [
    BoardsPageComponent,
    CreateBoardPageComponent,
    BrowseBoardPageComponent,
    IssuesPageComponent,
    CreateIssuePageComponent,
    BoardsListPageComponent,
    IssuesListPageComponent,
    BoardSettingsPageComponent,
    BrowseIssuePageComponent,
    SelectAssigneeModalComponent,
    CommentSectionComponent,
  ],
  entryComponents: [SelectAssigneeModalComponent],
  imports: [CommonModule, BoardsRoutingModule, ReactiveFormsModule, CoreModule],
})
export class BoardsModule {}
