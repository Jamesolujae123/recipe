import React from 'react'
import Jollof from "../assets/Jollof-d.jpg";
import Fishroll from "../assets/Fishroll-d.jpg";
import Meatpie from "../assets/Meatpie-d.jpg"
import "./Recipe.css"
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";

const Recipe = () => {

    
    const foodd = [ 
        {
             image: Meatpie,
            name: "Meat pie",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum", 
         ingredients: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum",
            method: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum"
        }
    ]

  return (
    <div className='details'>

<div className='d-cont'>

<div className='wrapper'><img className='meat' src={Meatpie} alt="" /></div>
        {foodd.map((food)=> (
           
            <div className='d-det' key={food}>
                <div className='ini'><div className='d-name'><p>{food.name}</p>
 <span className='d-stars'><FaStar /><FaStar /><FaStar /><FaStar /><MdOutlineStarBorder /></span></div>
 </div >
 <div className='inin'>
 <div className='d-content'><p>{food.content}</p></div>
 <div className='d-ingre'>
    <p>Ingredients</p>
    <p>{food.ingredients}</p></div>
 <div className='d-method'>
    <p>Preparation</p>
    <p>{food.method}</p></div>
 </div>
 
 </div>
        ))}
       
   

</div>

<div className='fixed'>
<div className='top-ting'>
    <input className='wh-s' type="search" placeholder='Keywords' />
 <p className='wh'>All Categories</p>
<button className='sr'>Search Now</button>
</div>
<div></div>
<div></div>
</div>
    </div>
  )
}

export default Recipe