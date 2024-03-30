import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { api_uri } from '../../config';

function FindEventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("Fetching events...");
    fetch(`${api_uri}/api/auth/addEvent`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
      })
      .then(data => {
        console.log("Events:", data); // Log parsed data
        setEvents(data); // Set state with fetched data
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>Description: {event.description}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Category: {event.category}</p>  
            <p>Capacity: {event.capacity}</p>
            <p>Registration Deadline: {event.registrationDeadline}</p>  
            <p>Special Requirements: {event.specialRequirements}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindEventPage;
