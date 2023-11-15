import React from 'react';
import Createpost from './createpost';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  
  const handleAskButton = () => {
    console.log('Button clicked!');
    navigate('/ask');
  };

  return (
    <header style={{ margin: '10px 10px 10px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px' }}>All Questions</h1>
      <button className="ask-button" style={{ marginRight: '10px' }} onClick={handleAskButton} >Ask Question</button>
    </header>
  );
};

export default Header;
