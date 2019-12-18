import { User } from './users.model';

export interface NewComment {
  content: string;
}

export interface Comment {
  uid: string;
  content: string;
  author: User;
  created_time: string;
  updated_time: string;
}
