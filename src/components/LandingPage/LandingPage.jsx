import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <div className="LandingPage_Container" >
      <div className="Login_SignUp">
        <Link to="/signup">
          <button className="SignUp">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="LoginIn">Login</button>
        </Link>

      </div>
      <div className="content">
        <h1>Welcome to EventNest!</h1>
        <p>Your all-in-one solution for event management! Create, browse, and join events with ease. From conferences to social gatherings, Eventify simplifies the process so you can focus on creating unforgettable experiences. Join us and let's make your next event a success!</p>
        </div>
       </div>
    
      {/* Your components and JSX content go here */}
    </>
  );
}

export default LandingPage;
