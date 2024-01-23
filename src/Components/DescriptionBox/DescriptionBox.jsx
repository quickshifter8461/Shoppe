import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (133)
            </div>
        </div>
        <div className='descriptionbox-description'>
            <p>Welcome to Shopper, where style meets convenience! Explore our curated collection of premium products designed to enhance every aspect of your lifestyle. From fashion-forward apparel to cutting-edge gadgets, we've got everything you need to make a statement and elevate your everyday experiences.</p>
            <p>Discover the latest trends in men's and women's fashion. Our carefully selected clothing range ensures that you're always on point, whether you're heading to the office, a night out with friends, or a weekend adventure. Quality and style converge in our diverse collection, offering something for everyone.</p>
        </div>
    </div>
  )
}
