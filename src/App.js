

import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleEventCreate = (newEvent) => {
    // Update events array with the new event
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <EventForm onEventCreate={handleEventCreate} />
      <EventList events={events} />
    </div>
  );
};

export default App;
