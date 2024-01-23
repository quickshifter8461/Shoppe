import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
    <div className='offers-left'>
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>Only On Selected Items</p>
        <button>Grab Now</button>
    </div>
    <div className='offers-right'>
        <img src={exclusive_image} alt=''/>
    </div>
    </div>
  )
}
