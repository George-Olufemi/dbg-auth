import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
    </div>
  )
}

export default Home
