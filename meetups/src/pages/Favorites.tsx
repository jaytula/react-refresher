import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  let content: JSX.Element;

  if (totalFavorites === 0) {
    content = <p>You got not favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
