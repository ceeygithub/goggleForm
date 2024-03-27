import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, local storage, etc.)
    // Then navigate the admin to the logout page or the login page
    navigate('/');
  };
  return (
    <div className='' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:'10rem',textDecoration:'none',color:'white'}}>
      <div style={{textAlign:'center'}}>Admin page</div>
   <a href="https://docs.google.com/spreadsheets/d/1GnrVlsarLzp0FZ397mefmbRcHOPn1Z17y4PQQXXre9M/edit?usp=sharing" className='link' target="_blank" rel="noopener noreferrer"  style={{marginTop:'10rem',textDecoration:'none',color:'white'}}>Go to Google Sheets to see responses</a>
 <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
