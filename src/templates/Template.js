import React, { useState } from 'react'
import '../css/main.css'

function Template({src, alt}) {
  const [click, setClick] = useState(false)
  const active = (!click)? 'maximaze' : '';
  const toScale = (!click)? 'noActive' : 'active'
  function getImg() {
    setClick(active)
  }
  return (
    <div className='galary__images-flex'>
      <div className='scale'>
      <img onClick={getImg} src={src} alt={alt}/>
      </div>
      <div className={toScale}>
      <img className={click} src={src} alt={alt}/>
        </div>

    </div>
  )
}

export default Template