export type keyProps = keyof Person;

export enum StatusType {
  Active = 'Active', Inactive = 'Inactive'
};

export interface Person {
    Name: string
    "Favorite Food": string
    "Favorite Movie": string
    Status: StatusType
    createdAt?: number
  }
  

