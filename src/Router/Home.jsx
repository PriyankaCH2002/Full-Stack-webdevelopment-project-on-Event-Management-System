import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='Home_Page'> 
      <div className='Home_text'>
      <h1>Welcome to Event Nest</h1>
      {/* Your components and JSX content go here */}
      </div>
      </div>
     
    </>
  );
}

export default Home;
