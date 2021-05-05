import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

export interface IMeetupBare {
  image: string;
  title: string;
  address: string;
  description: string;
}

export interface IMeetup extends IMeetupBare {
  id: string;
}

function MeetupItem(props: IMeetup) {
  const { itemIsFavorite, addFavorite, removeFavorite } = useContext(
    FavoritesContext
  );

  const favoriteStatus = itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (favoriteStatus) {
      removeFavorite(props.id);
    } else {
      addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{favoriteStatus ? 'Remove From Favorite' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
