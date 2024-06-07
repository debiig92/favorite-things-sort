import { favoriteThigsConstant } from "../helpers/FavoriteThingsList";
import { formatDate } from "../helpers/Helpers";
import { Person, StatusType, keyProps } from "../interfaces/Person";

const useFavoriteThings = () => {

    let favoriteThingsList: Person[] = [...favoriteThigsConstant]
    const favoriteThingsKeys: keyProps[] = Object.keys(favoriteThingsList[0]) as unknown as keyProps[];
    const printFavoriteThings = (favoriteThing: Person, property: keyof Person) => {
      return favoriteThing[property]
    }

    const printOnlyActivePersons = (favoriteThingsList: Person[]) => {
      return favoriteThingsList.filter((elem) => elem.Status === StatusType.Active).map((el) => (
        { Name: el.Name ,createdAt: formatDate(el.createdAt) , "Favorite Movie" : el["Favorite Movie"]}
      ))
    }

    const sortFavoriteThings = (property: keyof Person) => {
        return property ? [...favoriteThingsList].sort((a,b) => a[property]!.toLocaleString().localeCompare(b[property]!.toLocaleString())  ) : []
    }
  
  return {
    favoriteThingsList , favoriteThingsKeys, printFavoriteThings,sortFavoriteThings, printOnlyActivePersons
  }
}

export default useFavoriteThings