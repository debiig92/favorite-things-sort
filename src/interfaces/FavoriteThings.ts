export type keyProps = keyof FavoriteThings;

export enum StatusType {
  Active = 'Active', Inactive = 'Inactive'
};

export interface FavoriteThings {
    Name: string
    "Favorite Food": string
    "Favorite Movie": string
    Status: StatusType
    createdAt?: number
  }
  

