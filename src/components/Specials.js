import React from 'react'
import SpecialsMenu from './SpecialsMenu'

export default function Specials() {
  return (
    <div className='specials'>
        <div className='specialsTop'>
            <h2>Specials</h2>
            <button><a href="/order">Order Online</a></button>
        </div>
        <SpecialsMenu />
    </div>
  )
}
