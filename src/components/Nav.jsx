import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import brand from "../assets/brand-pic.png"
import './Nav.css'
import { IoMdSearch } from "react-icons/io";


const Nav = () => {


  return (
    <div className='nav-cont'>
       
        <nav className='Navi-cont'>
            <div className='left-cont'>
                <div> <img className='brand' src={brand} alt="b-pic" /> </div>
                
                <div className='brand-d'><h2 className='Title'>Recipe Net</h2>
                <p className='desc'>An Encyclopedia of recipies</p>
                </div>
                
            </div>
            <div className='Nav-links'>
<Link className='link' to={'/'}>Home</Link >
<Link className='link' to={'/Recent'}>Recent recipe</Link > 
<Link className='link' to={'/AddRecipe'}>Add recipe</Link >
<Link className='link' to={'/Blog'}>Blog</Link >
<Link className='link' to={'/ContactUs'}>Contact Us</Link >
<Link className='link' to={'/AboutUs'}>About</Link >
            </div>
            <div className='right-cont'>
    <Link className='link' to={'/Search'}><IoMdSearch /></Link>
    <Link className='link' to={'/signin'}>Sigin</Link >
            </div>
        </nav>

    </div>
  )
}

export default Nav