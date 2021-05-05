import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props: {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          description={meetup.description}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
