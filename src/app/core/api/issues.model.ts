import { User } from './users.model';

export interface Issue {
  uid: string;
  title: string;
  detail: string;
  assignee: User;
  status: string;
}

export interface NewIssue {
  title: string;
  detail: string;
  assignee: string;
  status: string;
}

export interface IssueUpdate {
  title: string;
  detail: string;
  assignee: string;
  status: string;
}
