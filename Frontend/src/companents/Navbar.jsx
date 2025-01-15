import React, { useContext } from 'react'
import { use } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router';
import { favoritesContext } from '../context/WishlistContext';

function Navbar() {
  let {favorites} = useContext(favoritesContext)
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="logo">
          <span>Selling<span style={{ color: "#fa703c" }}>.</span></span>
        </div>
        <div className="list">
          <ul>
            <li><NavLink to={"/"} style={{ color: "black" }}>Home</NavLink></li>
            <li>Products</li>
            <li>About</li>
            <li>Leadership</li>
            <li>Services</li>
            <li><NavLink to={"/add"} style={{ color: "black" }}>Add</NavLink></li>
            <li><NavLink to={"/wishlist"} style={{ color: "black" }}>Wishlist ({favorites.length})</NavLink></li>
          </ul>
          <div className="icon">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
