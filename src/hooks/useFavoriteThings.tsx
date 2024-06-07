import { favoriteThigsConstant } from "../helpers/FavoriteThingsList";
import { Person, keyProps } from "../interfaces/Person";

const useFavoriteThings = () => {

    let favoriteThingsList: Person[] = [...favoriteThigsConstant]
    const favoriteThingsKeys: keyProps[] = Object.keys(favoriteThingsList[0]) as unknown as keyProps[];
    const printFavoriteThings = (favoriteThing: Person, property: keyof Person) => {
      return favoriteThing[property]
    }


    const sortFavoriteThings = (property: keyof Person) => {
        return property ? [...favoriteThingsList].sort((a,b) => a[property]!.toLocaleString().localeCompare(b[property]!.toLocaleString())  ) : []
    }
  
  return {
    favoriteThingsList , favoriteThingsKeys, printFavoriteThings,sortFavoriteThings
  }
}

export default useFavoriteThings