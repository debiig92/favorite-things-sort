import { favoriteThigsConstant } from "../helpers/FavoriteThingsList";
import { FavoriteThings, keyProps } from "../interfaces/FavoriteThings";

const useFavoriteThings = () => {

    let favoriteThingsList: FavoriteThings[] = [...favoriteThigsConstant]
    const favoriteThingsKeys: keyProps[] = Object.keys(favoriteThingsList[0]) as unknown as keyProps[];
    const printFavoriteThings = (favoriteThing: FavoriteThings, property: keyof FavoriteThings) => {
      return favoriteThing[property]
    }


    const sortFavoriteThings = (property: keyof FavoriteThings) => {
        return property ? [...favoriteThingsList].sort((a,b) => a[property]!.toLocaleString().localeCompare(b[property]!.toLocaleString())  ) : []
    }
  
  return {
    favoriteThingsList , favoriteThingsKeys, printFavoriteThings,sortFavoriteThings
  }
}

export default useFavoriteThings