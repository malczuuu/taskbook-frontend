export interface User {
  uid: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
}

export interface NewUser {
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
}
