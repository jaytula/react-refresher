import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData: {
    title: string;
    image: string;
    address: string;
    description: string;
  }) {
    fetch(`${process.env.REACT_APP_FIREBASE_BACKEND}meetups.json`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(meetupData),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
