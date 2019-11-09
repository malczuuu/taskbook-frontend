import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardSettingsPageComponent } from './pages/board-settings-page/board-settings-page.component';
import { BoardsListPageComponent } from './pages/boards-list-page/boards-list-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { BrowseBoardPageComponent } from './pages/browse-board-page/browse-board-page.component';
import { BrowseIssuePageComponent } from './pages/browse-issue-page/browse-issue-page.component';
import { CreateBoardPageComponent } from './pages/create-board-page/create-board-page.component';
import { CreateIssuePageComponent } from './pages/create-issue-page/create-issue-page.component';
import { IssuesListPageComponent } from './pages/issues-list-page/issues-list-page.component';
import { IssuesPageComponent } from './pages/issues-page/issues-page.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsPageComponent,
    children: [
      { path: '', component: BoardsListPageComponent, pathMatch: 'full' },
      { path: 'create', component: CreateBoardPageComponent },
      {
        path: ':board',
        component: BrowseBoardPageComponent,
        children: [
          { path: '', redirectTo: 'issues', pathMatch: 'full' },
          {
            path: 'issues',
            component: IssuesPageComponent,
            children: [
              { path: '', component: IssuesListPageComponent, pathMatch: 'full' },
              { path: 'create', component: CreateIssuePageComponent },
              { path: ':issue', component: BrowseIssuePageComponent }
            ]
          },
          { path: 'settings', component: BoardSettingsPageComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule {}
