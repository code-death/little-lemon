import React from 'react'
import SpecialsMenu from './SpecialsMenu'
import '../Css/Specials.css'

export default function Specials() {
  return (
    <div className='specials'>
        <div className='specialsTop'>
            <h2>This Weeks Specials !</h2>
            <button><a href="/order">Order Online</a></button>
        </div>
        <SpecialsMenu />
    </div>
  )
}
