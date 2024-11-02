import React from 'react';

function LogIn({ onLogin }) {
  const handleLogin = () => {
    // Simulate login logic
    console.log('User logged in');
    onLogin(); // Call the onLogin function to set the state in App component
  };

  return (
    <div>
      <h2>Please log in</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogIn;
