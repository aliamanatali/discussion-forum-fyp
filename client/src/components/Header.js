import React from 'react';

const Header = () => {
  return (
    <header style={{ margin: '10px 10px 10px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px' }}>All Questions</h1>
      <button className="ask-button" style={{ marginRight: '10px' }}>Ask Question</button>
    </header>
  );
};

export default Header;
