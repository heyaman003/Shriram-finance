import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<div className='footer-container'>
  <div className='marginal-footer'>
    <div className='flex align-middle justify-between w-full h-full'>
      <div className='col-md-auto'>
        <p className='m-0'>© 2024 Bharat Aluminium Company Limited</p>
      </div>
      <div className=' col-md-auto'>
        <p className='m-0 flex align-middle'>
          Designed and Developed by
          <a href="https://www.kalolwala.com">
            <img src="./logo-k&a.png" alt="" className='footer-logo' />
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer