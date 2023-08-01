import React from 'react'
import banner1 from "./../images/banner-1.png"
import banner2 from "./../images/banner-2.png"

const Minimal = () => {
  return (
    <div className='minmial'>
      <div className='container'>
         <div className='row'>
            <div className='col-md-4 col-sm-12 x1'>
               <img src={banner1} alt='minmial' />
            </div>
            <div className='col-md-8 col-sm-12'>
            <img src={banner2} alt='minmial' />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Minimal
