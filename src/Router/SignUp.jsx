import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_uri } from '../../config';

function SignUp({}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isSignin, setIsSignin] = useState(false);
  const navigate = useNavigate(); // Define navigate using useNavigate

  const Register=async(e)=>{
    e.preventDefault()
    console.log('register signup frontend');
    const response=await fetch(`${api_uri}/api/auth/register`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        password:password
      })    
    })
    const data=await response.json();
    console.log(data);
  }

  const handleSignin = () => {
    // Here you would typically send the username and password to your backend for authentication
    // For simplicity, we'll just set isLoggedIn to true if username and password are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsSignin(true);
    } else {
      alert('Please enter username and password.');
    }

    if (isSignin) {
      // Redirect to the landing page if user is logged in
      navigate('/login');
    }
  };

  


  

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="big-white p-3 rounded w-25">
      <h2>Sign Up</h2>
      <form onSubmit={Register}>
        <div className="mb-3">
          <label htmlFor="username">
            <strong> username</strong>
          </label>
          <input 
          type="text"
          placeholder="Enter user Name"
          autoComplete="off"
          name="username"
          className="form-control rounded-0"
          onChange={(e)=> setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong> password</strong>
          </label>
          <input 
          type="password"
          placeholder="Enter password"
          autoComplete="off"
          name="username"
          className="form-control rounded-0"
          onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleSignin}>
          Sign Up
        </button>
      </form>
        
      <p>Already have an account? </p>
      <Link to="/login" className="btn btn-defaukt border w-100 bg-light rounded-0 ">Login</Link>
    </div>
    </div>

  );
}

export default SignUp;
