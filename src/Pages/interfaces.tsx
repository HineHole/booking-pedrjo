

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

export interface IBooking {
  date: number;
  time: number;
  customer: string;
  type: string;
  status: boolean;
}
