import React, { useState } from 'react'
import '../css/main.css'

function Template({src, alt}) {
  const [click, setClick] = useState(false)
  function getImg() {
    setClick(!click)
  }
  const toScale = (!click)? 'noactive' : 'active'

  return (
    <div className='galary__images-flex'>
      <div className='scale'>
      <img  className={toScale} onClick={getImg} src={src} alt={alt}/>
      </div>
      {/* <div className={toScale}>
      <img className={click} src={src} alt={alt}/>
        </div> */}

    </div>
  )
}

export default Template