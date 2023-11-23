import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector } from "react-redux";

import './TopMenu.css'
import Header from '../Header/Header';

function TopMenu() {
  const cartSlice = useSelector((state) => state.AddtoCartSlice.itemLength);


  return (
    <>
   <nav className="py-2 bg-light border-bottom position-sticky top-0 z-1">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item"><NavLink className={({isActive})=> isActive ? 'nav-link link-dark px-2 active' : 'nav-link link-dark px-2'} to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className={({isActive})=> isActive ? 'nav-link link-dark px-2 active' : 'nav-link link-dark px-2'} to="/About">About Us</NavLink></li>
        <li className="nav-item"><NavLink className={({isActive})=> isActive ? 'nav-link link-dark px-2 active' : 'nav-link link-dark px-2'} to="/Products">Products</NavLink></li>
        <li className="nav-item"><NavLink className={({isActive})=> isActive ? 'nav-link link-dark px-2 active' : 'nav-link link-dark px-2'} to="/FAQs" >FAQs</NavLink></li>
        <li className="nav-item"><NavLink className={({isActive})=> isActive ? 'nav-link link-dark px-2 active' : 'nav-link link-dark px-2'} to="/Contact">Contact Us</NavLink></li>
      </ul>
      <ul className="nav">
        <li className="nav-item"><NavLink to="/Cart" className="nav-link link-dark px-2">Cart <span className='badge'>{cartSlice}</span></NavLink></li>
        <li className="nav-item"><NavLink to="/Login" className="nav-link link-dark px-2">Login</NavLink></li>
        <li className="nav-item"><NavLink to="/Signup" className="nav-link link-dark px-2">Sign up</NavLink></li>
      </ul>
    </div>
  </nav>
<Header />
    </>
  );
}

export default TopMenu;