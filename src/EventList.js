import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.name}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
