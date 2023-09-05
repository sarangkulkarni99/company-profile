export type Order = [string, string];

export interface IWhereClause {
  [key: string]: string | number | object;
}

export interface ICustomer {
  firstName: string;
  lastName: string;
  city: string;
  company: string;
}

export interface IFilter {
  sortBy?: string[];
  search?: string;
  page?: number;
  limit?: number;
}