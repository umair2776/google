import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
 // Include custom styles if needed
 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
      <div className='google'>
        <div className='icon'>
        <FaGooglePlay  />
        </div>
        <div>
          <h2>Google Play</h2>
        </div>
        <div className='navbar'>
            <li><Link className='line' to={"/"}>Games</Link></li>
            <li><Link className='line' to={"/apps"}>Apps</Link></li>
            <li><Link className='line' to={"/movie"}>Movies & TV</Link></li>
            <li><Link className='line' to={"/books"}>Books</Link></li>
            <li><Link className='line' to={"/kids"}>Kids</Link></li>

        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
