import React from 'react'

const users = [
  {
    img: '',
    name: 'Adam',
    rating: 4.5,
  },
  {
    img: '',
    name: 'Martha',
    rating: 4,
  },
  {
    img: '',
    name: 'William',
    rating: 4.5,
  },
  {
    img: '',
    name: 'Maria',
    rating: 5,
  },
]


export default function Testimonials() {
  return (
    <div className='testimonials'>
        <h1 className='testimonialHeading'>Testimonials</h1>
        {users.map(user => (
          <div key={user.name} className='testimonialUser'>
          <img src={user.img} alt="UserImage" />
          <div className='userDetails'>
              <h3 className='username'>{user.name}</h3>
              <p className='rating'>{user.rating}</p>
          </div>
          <p className='userTestimonial'></p>
      </div>
        ))}
    </div>
  )
}
