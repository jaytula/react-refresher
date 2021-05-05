import { useEffect, useState } from "react";
import { IMeetup, IMeetupBare } from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedMeetups, setLoadedMeetups] = useState<IMeetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_FIREBASE_BACKEND}meetups.json`)
      .then((res) => res.json())
      .then((data: { [id: string]: IMeetupBare }) => {
        setIsLoading(false);
        const meetups = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
