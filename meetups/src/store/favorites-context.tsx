import { createContext, ReactNode, useState } from "react";
import { IMeetup } from "../components/meetups/MeetupItem";

const FavoritesContext = createContext<{
  favorites: IMeetup[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: IMeetup) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => { return false; },
});

export function FavoritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userFavorites, setUserFavorites] = useState<IMeetup[]>([]);

  function addFavoriteHandler(favoriteMeetup: IMeetup) {
    setUserFavorites((meetups) => meetups.concat(favoriteMeetup));
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((meetups) =>
      meetups.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;