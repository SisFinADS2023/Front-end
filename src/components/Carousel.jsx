import React, { useState } from 'react'
import {ArrowLeft2,ArrowRight2} from 'iconsax-react'
export default function Carousel({images}) {

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const nexIndex = isFirstSlide ? images.length - 1 : currentIndex -1;
        setCurrentIndex(nexIndex)
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === images.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }

      const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
      }

      
  return (
    <div className='max-w-[1400px] h-[25em] w-5/6 m-auto py-16 px-4 relative group lg:hidden'>
        <div 
        style={{backgroundImage: `url(${images[currentIndex].imgPath})`}} 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-white'>

        </div>
        {/* left Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
            <ArrowLeft2
            onClick={prevSlide}
            size="25"
            color="#000"/>
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
            <ArrowRight2
            onClick={nextSlide}
            size="25"
            color="#000"/>
        </div>
        <div className='flex gap-3 top-4 justify-center py-2'>
            {images.map((images, imageIndex) => (
                <span key={imageIndex} onClick={() => goToSlide(imageIndex)} className='text-4xl font-bold -mt-2 cursor-pointer'>.</span>
            ))}
        </div>
    </div>

  )
}
