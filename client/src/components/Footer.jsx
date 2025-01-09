import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='flex justify-between mx-20 my-8'>
      <div className='flex gap-4 items-center'>
        <img src={assets.logo} alt="" />
        <span>| All rights reserved. Copyright 2024</span>
      </div>
      <div className='flex gap-4'>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
      </div>
    </footer>
  );
}

export default Footer
