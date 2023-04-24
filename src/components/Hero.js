import React from 'react'
import '../Css/Hero.css'
import image from '../Assets/restauranfood.jpg'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='heroText'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button><a href="/reservation">Reserve Table</a></button>
        </div>
        <img className='heroImage' src={image} alt="" />
    </div>
  )
}
