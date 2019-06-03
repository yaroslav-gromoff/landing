import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about-me">About me</Link>
      <Link to="/about-me">Blog</Link>
    </nav>
);

export default Header;
