import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
  <div className="Navbar">
    <Link to="/">Home</Link>
    <Link to="/News">News</Link>
    <Link to="/Team">Meet our team</Link>
    <Link to="/bla">Not found</Link>
  </div>;

export default Navbar;
