import React from 'react'
import { images } from '../../constants'
import './Header.scss'

const Header = () => {
  return (
    <div className='Home'>
        <div className='header'>
            <div className='title'>
                <h1><a href = "https://github.com/lucasichen/ridehome" target="_blank" rel="noreferrer"> ride home </a></h1>
            </div>
            
            {/* <BsFillVolumeUpFill id='souwnd-icon'/> */}
        </div>
        <img id='home-img' src={images.train_night} alt='home-img' />
    </div>
  )
}

export default Header