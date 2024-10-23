import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'

const LeftSidebar = () => {
  return (
    <div className='ls'>
       <div className="ls-top">
         <div className="ls-nav">
             <img src={assets.logo} classname='' alt="" />
         </div>
       </div>
    </div>
  )
}

export default LeftSidebar