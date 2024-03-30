import React, { useState, useEffect } from 'react';
import './EventBrowserPage.css'; // Import CSS file
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



// Sample event data
const eventsData = [
  {
    id: 1,
    title: 'Tech Conference',
    category:'Conference',
    description: 'A conference about the latest technologies.',
    date: '2024-04-10',
    time: '09:00 AM',
    location: 'New York',
    organizer: 'Tech Events Inc.',
    capacity: 100,
    registered: 50
  },
  {
    id: 2,
    title: 'Art Workshop',
    category:'Workshop',
    description: 'A hands-on workshop for art enthusiasts.',
    date: '2024-04-15',
    time: '02:00 PM',
    location: 'Los Angeles',
    organizer: 'Artistry Studio',
    capacity: 50,
    registered: 20
  }
];

function EventCard({ event, onRegister }) {
  const handleRegisterClick = () => {
    // Check if registration is allowed based on event capacity
    if (event.registered < event.capacity) {
      onRegister(event.id);
      
    } else {
      alert('Event registration is full!');
    }
  };


  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Organizer: {event.organizer}</p>
      <p>Registered Attendees: {event.registered}/{event.capacity}</p>
      <Link to='/registration'>
      <button onClick={handleRegisterClick}>Register</button>
      </Link>
    </div>
  );
}

function EventBrowserPage() {
  const [events, setEvents] = useState(eventsData);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Apply filters based on search term, location, and category
    let filtered = eventsData.filter(event => {
      const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation = selectedLocation === 'All' || event.location === selectedLocation;
      const matchCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchSearch && matchLocation && matchCategory;
    });
    setFilteredEvents(filtered);
  }, [events, searchTerm, selectedLocation, selectedCategory]);

  const handleRegister = (eventId) => {
    // Implement registration logic here, e.g., send registration request to backend
    console.log('Registered for event with ID:', eventId);
    // Update registered count locally
    setEvents(events.map(event => event.id === eventId ? { ...event, registered: event.registered + 1 } : event));
  };

  return (
  
    <div className="event-browser-page">
      <div>
        <Navbar/>
      </div>
      <h1>Discover Events</h1>
      <div className="filters">
        <input type="text" placeholder="Search Events" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="All">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          {/* Add more location options as needed */}
        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          {/* Add more category options as needed */}
        </select>
      </div>
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onRegister={handleRegister} />
        ))}
      </div>
    </div>
  );
}

export default EventBrowserPage;
