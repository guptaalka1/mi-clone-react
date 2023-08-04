import React from 'react'
import "../styles/nav.css"
import {Link} from "react-router-dom"
import data from "../data/data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const l=data.logo
const searchIcon=<FontAwesomeIcon icon={faMagnifyingGlass} color='rgb(61,61,61)' />


const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <a href="/">
             <img id="logoImage" src={l} alt="Not"/>
        </a>
        </div>

        <a href="/miphones" className="navlinks"> MI Phones</a>
        <a href="/redmiphones" className="navlinks">Redmi phones</a>
        <a href="/tv" className="navlinks">TV</a>
        <a href="/laptops" className="navlinks">Laptops</a>
        <a href="/lifestyle" className="navlinks">Fitness & Lifestyle</a>
        <a href="/home" className="navlinks">Home</a>
        <a href="/audio" className="navlinks">Radio</a>
        <a href="/accessories" className="navlinks">Accessories</a>
      
      <div className="searchbox"><input type="text" name="search" placeholder='Search Products' />
      {searchIcon}</div>
      
      </div>
  )
}

export default Navbar
