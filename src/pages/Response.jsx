import React from 'react';
import { useNavigate } from 'react-router-dom';

const Response = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='App'>
      <h4>Your response has been saved</h4>
      <div>Thank you for answering our questions</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Response;
