import { Person, StatusType } from "../interfaces/Person"

let rockyObj: Person = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': StatusType.Inactive,
  }
  let miroslavObj: Person  = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': StatusType.Inactive,
  }
  let donnyObj: Person  = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': StatusType.Inactive,
  }
  let mattObj: Person  = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': StatusType.Active
}
  let debObj: Person  = {
    'Name': 'Deb',
    'Favorite Food': 'Hamburgers',
    'Favorite Movie': 'Harry Potter and the prisoner of Azkaban',
    'Status': StatusType.Active,
  }

export const favoriteThigsConstant: Person[] = [{...rockyObj},{...miroslavObj},{...donnyObj},{...mattObj},{...debObj}]
.map((obj: Person) => ({ ...obj, createdAt : Date.now() }));



