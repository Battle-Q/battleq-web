export interface LoginType {
  email: string;
  password: string;
}

export interface RegistType {
  email: string;
  name: string;
  password: string;
  nickname: string;
}

export interface UserData {
  userdata: string[];
}

export interface UserDataArray {
  userdata: UserData[];
}

export interface BoardData {
  title: string;
  content: string;
  category: string;
  priority: boolean;
}
