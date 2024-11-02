import React from 'react'; // Import React and useState
import './App.css'; // Import your styles
import LogIn from './components/logIn'; // Import your LogIn component
import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Conditional rendering using if-else
  let content;
  if (isLoggedIn) {
    content = <h1>Welcome back!</h1>;
  } else {
    content = <LogIn onLogin={() => setIsLoggedIn(true)} />; // Using LogIn component
  }

  return (
    <div>
      {content}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
