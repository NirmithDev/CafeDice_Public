import React from 'react';
import Navbar from '../menu/Navbar';
import MenuPage from '../menu/menu';

const Menu = () => {
  return (
    <div className="container px-5 py-21 mx-auto flex flex-col" style={{ marginTop: '7rem' }}> 
      <Navbar />
      <MenuPage />
    </div>
  );
};

export default Menu;
