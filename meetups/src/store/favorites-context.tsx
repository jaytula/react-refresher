import { createContext, ReactNode, useState } from "react";
import { IMeetup } from "../components/meetups/MeetupItem";

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
