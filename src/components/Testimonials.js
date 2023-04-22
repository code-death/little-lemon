import React from 'react'

export default function Testimonials() {
  return (
    <div className='testimonials'>
        <h1 className='testimonialHeading'>Testimonials</h1>
        <div className='testimonialUser'>
            <img src="" alt="UserImage" />
            <div className='userDetails'>
                <h3 className='username'>Username</h3>
                <p className='rating'>Rating</p>
            </div>
            <p className='userTestimonial'></p>
        </div>
    </div>
  )
}
