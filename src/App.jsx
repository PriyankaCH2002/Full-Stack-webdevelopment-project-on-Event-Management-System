import React from 'react';
import Navbar from './components/Router/Navbar';
import SignUp from './components/Router/SignUp';
import Home from './components/Router/Home';
import AddEvent from './components/Router/AddEvent';
import FindEventPage from './components/Router/FindEventPage';
import EventBrowserPage from './components/Router/EventBrowserPage';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Registration from './components/Router/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/home' element={<Home />}/>   
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/addEvent' element={<AddEvent />}/>
    <Route path='/findEventPage' element={<FindEventPage />}/>
    <Route path='/eventBrowserPage' element={<EventBrowserPage />}/>
    <Route path='/registration' element={<Registration />}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
