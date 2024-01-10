import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full flex gap-20 justify-evenly">
      <Link to="/">Home</Link>
      <Link to="setup-workout">setup-workout</Link>
    </div>
  );
};

export default Header;
