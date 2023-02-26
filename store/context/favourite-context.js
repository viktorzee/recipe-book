// import { createContext, useState } from "react";

// export const FavouritesContext = createContext({
//   ids: [],
//   addFavourite: (id) => {},
//   removeFavourite: (id) => {},
// });

// export default function FavouritesContextProvider({ children }) {
//   const [favouriteMealIds, setFavouriteMealIds] = useState([]);

//   function addFavourite(id) {
//     setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
//   }

//   function removeFavourite(id) {
//     setFavouriteMealIds((currentFav) =>
//       currentFav.filter((mealIds) => mealIds !== id)
//     );
//   }

//   const value = {
//     ids: favouriteMealIds,
//     addFavourite,
//     removeFavourite,
//   };

//   return (
//     <FavouritesContext.Provider value={value}>
//       {children}
//     </FavouritesContext.Provider>
//   );
// }
