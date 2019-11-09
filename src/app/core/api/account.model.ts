export interface Account {
  uid: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
}

export interface AccountUpdate {
  email: string;
  first_name: string;
  last_name: string;
}

export interface PasswordUpdate {
  old_password: string;
  new_password: string;
}
