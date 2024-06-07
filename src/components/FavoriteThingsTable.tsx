import { ChangeEvent, useLayoutEffect, useState } from "react"
import useFavoriteThings from "../hooks/useFavoriteThings"
import { FavoriteThings, StatusType, keyProps } from "../interfaces/FavoriteThings"
import { formatDate } from "../helpers/Helpers"

const FavoriteThingsTable = () => {

  const {favoriteThingsList , favoriteThingsKeys , printFavoriteThings, sortFavoriteThings} = useFavoriteThings()

  const [listFavoriteThings, setListFavoriteThings] = useState([...favoriteThingsList])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void  => {
    const property: keyProps = event.target.value as unknown as keyProps;
    
    const sort = property ? sortFavoriteThings(property) : [];

    setListFavoriteThings(sort.length > 0 && property ? sort : [...favoriteThingsList])
  }

  useLayoutEffect(() => {
    sortFavoriteThings(favoriteThingsKeys[0])
    console.log("Active Elements: " , listFavoriteThings.filter((elem) => elem.Status === StatusType.Active))
  }, [])

  return (
    <>

      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">

          <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-between">
              <h2 className="font-semibold text-gray-800">Favorite Things</h2>
              <select id="favorite-things" className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
                {
                    favoriteThingsKeys.map((k: keyProps, index: number) => (
                      <option className="capitalize"  key={k+index} value={k}>{k}</option>
                    ))
                }
              </select>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      {
                        favoriteThingsKeys.map((k: keyProps) => (
                          <th className="p-2 whitespace-nowrap" key={k}>
                            <div className="font-semibold text-left">{k}</div>
                          </th>
                        ))
                      }
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">


                    {
                      listFavoriteThings.map((favorite: FavoriteThings) => (
                        <tr key={favorite.Name}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">{printFavoriteThings(favorite, favoriteThingsKeys[0])}</div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{printFavoriteThings(favorite, favoriteThingsKeys[1])}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium">{printFavoriteThings(favorite, favoriteThingsKeys[2])}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className={favorite.Status === StatusType.Active ? "text-lg text-center text-green-500" : "text-lg text-center text-red-500"}>{printFavoriteThings(favorite, favoriteThingsKeys[3])}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{formatDate(printFavoriteThings(favorite, favoriteThingsKeys[4]))}</div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FavoriteThingsTable