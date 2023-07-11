export interface loginType {
  email: string;
  pwd: string;
}

export interface registType {
  email: string;
  pwd: string;
  nickname: string;
  userName: string;
}

export interface userData {
  userdata: string[];
}

export interface userDataArray {
  userdata: userData[];
}
