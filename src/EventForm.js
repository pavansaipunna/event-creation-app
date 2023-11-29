import React, { useState } from 'react';

const EventForm = ({ onEventCreate }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleCreateEvent = () => {
    // Mock API call - you can replace this with an actual API call
    const newEvent = {
      name: eventName,
      date: eventDate,
    };

    onEventCreate(newEvent);

    // Reset form after creating event
    setEventName('');
    setEventDate('');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <label>
        Event Name:
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </label>
      <br />
      <label>
        Event Date:
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
};

export default EventForm;
