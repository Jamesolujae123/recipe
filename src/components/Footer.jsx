import React from 'react'
import './Footer.css' 

const Footer = () => {
  return (
    <div className='footer'>
        <div className='first-f'>
        <div className='left-ting'>
    <div>
    <h2 className='Title-w'>Recipe Net</h2>
    <p className='desc'>An Encyclopedia of recipies</p>
    </div>
    <div>
        <p className='f-ting'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laudantium dolor harum porro dolores libero temporibus soluta adipisci ipsum sunt illo eos veniam atque minus facilis, accusantium reprehenderit aliquid praesentium?</p>
    </div>
    <div><button className='Read'>Read More</button></div>

</div>
<div className='middle-ting'></div>
<div className='right-ting'></div>
        </div>

<div className='bottom'>
<div>
    <span className='copy'>Copyright</span>
</div>
<div> <span className='dev'>Developed by</span> <span className='by' >OluJae</span></div>

</div>
    </div>
  )
}

export default Footer