import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData: {title: string, image: string, address: string, description: string}) {

  }
  
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
