import React, { useState } from 'react';
import './AddEvent.css';
import Navbar from './Navbar';
import { api_uri } from '../../config';

function EventForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    capacity: '',
    registrationDeadline: '',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: '',
      capacity: '',
      registrationDeadline: '',
      specialRequirements: ''
    });
  
    try {
      console.log('register addEvent frontend');

      const response = await fetch(`${api_uri}/api/auth/addEvent`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  
  
     
  
  return (
    <form onSubmit={handleSubmit} className='Add_Event'>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required className='Title' />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="text" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </label>
      <label>
        Capacity:
        <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} required />
      </label>
      <label>
        Registration Deadline:
        <input type="date" name="registrationDeadline" value={formData.registrationDeadline} onChange={handleChange} required />
      </label>
      <label>
        Special Requirements:
        <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
}

function Event({ event, onDelete, onEdit }) {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
      <p>Capacity: {event.capacity}</p>
      <p>Registration Deadline: {event.registrationDeadline}</p>
      <p>Special Requirements: {event.specialRequirements}</p>
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event)}>Delete</button>
    </div>
  );
}

function AddEvent() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = (formData) => {
    setEvents([...events, formData]);
  };
  

  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter(event => event !== eventToDelete));
  };

  const handleEditEvent = (eventToEdit) => {
    setEditingEvent(eventToEdit);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(events.map(event => event === editingEvent ? updatedEvent : event));
    setEditingEvent(null);
  };

  return (
    <div className='Main'>
      <div>
        <Navbar />
      </div>
      <h1 className='header'>Create New Event</h1>
      <EventForm onSubmit={handleAddEvent} />
      <h1>Events</h1>
      {events.map((event, index) => (
        <Event key={index} event={event} onDelete={handleDeleteEvent} onEdit={handleEditEvent} />
      ))}
      {editingEvent && (
        <div>
          <h2>Edit Event</h2>
          <EventForm onSubmit={handleUpdateEvent} initialData={editingEvent} />
        </div>
      )}
    </div>
  );
}

export default AddEvent;
