import React from 'react'
import placeholder from "../images/placeholder.png";
const GallerySection = () => {
  return (
    <div className='h-screen'>
      <div className="flex lg:flex-nowrap flex-wrap items-center justify-center bg-white  pt-10">
    <div>
        <img className="h-1/5 p-20 w-screen" src={placeholder} alt=""/>
    </div>
    <div>
        <img className="h-1/5 p-20 w-screen" src={placeholder}  alt=""/>
    </div>
    
</div>
    </div>
  )
}

export default GallerySection
