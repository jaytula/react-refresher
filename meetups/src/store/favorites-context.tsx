import { createContext, ReactNode, useState } from "react";
import { IMeetup } from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesContext = createContext<{
  favorites: IMeetup[];
  totalFavorites: number;
}>({
  favorites: [],
  totalFavorites: 0,
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
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
