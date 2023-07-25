import React from 'react'
import '../css/main.css'

function Template({src, alt}) {
  return (
    <div className='galary__images-flex'>
        <img className='galary__image' src={src} alt={alt}/>
    </div>
  )
}

export default Template