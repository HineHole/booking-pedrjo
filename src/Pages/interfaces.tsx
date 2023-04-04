

export interface User {
  customer: string;
  level: string;
  employee: string;
  status: boolean;
  _id: string;
  time: number;
  date: string;
}

export interface ICompleted {
  customer: string;
  level: string;
  employee: string;
  id: number;
  time: string;
  date: string;
}
