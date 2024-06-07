import { FavoriteThings, StatusType } from "../interfaces/FavoriteThings"

let rockyObj: FavoriteThings = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': StatusType.Inactive,
  }
  let miroslavObj: FavoriteThings  = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': StatusType.Active,
  }
  let donnyObj: FavoriteThings  = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': StatusType.Inactive,
  }
  let mattObj: FavoriteThings  = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': StatusType.Active
}
  let debObj: FavoriteThings  = {
    'Name': 'Deb',
    'Favorite Food': 'Hamburgers',
    'Favorite Movie': 'Harry Potter and the prisoner of Azkaban',
    'Status': StatusType.Active,
  }

export const favoriteThigsConstant: FavoriteThings[] = [{...rockyObj},{...miroslavObj},{...donnyObj},{...mattObj},{...debObj}]
.map((obj: FavoriteThings) => ({ ...obj, createdAt : Date.now() }));



