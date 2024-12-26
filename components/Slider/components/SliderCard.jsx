import { IMAGE_SPACES_URL } from '@/utils/APIS/websiteContentApi/websiteContentApi'
import Image from 'next/image'
import React from 'react'
import SliderController from './SliderController/SliderController'

export default function SliderCard({item, index, activeIndex, sliderContainerWidth, handleNext, handlePrev}) {

  return (
    <React.Fragment key={index}>
            <div className={`relative slider-item duration-1000 transition-all`} style={{ width: activeIndex === index ? (sliderContainerWidth / 7) * 3 : sliderContainerWidth / 7 }}>
              <div className={` max-w-[400px] mx-auto transition-all relative overflow-hidden content-container ${activeIndex < index ? "ml-auto" : "mr-auto"}`}>
                <div className={`slider-top-section duration-300 relative flex items-end transition-all mx-auto`}>
                  <Image
                    src={IMAGE_SPACES_URL + item.image}
                    width={500}
                    height={500}
                    alt="img"
                    className={`absolute top-0 left-0 duration-300 object-cover transition-all filter grayscale`}
                  />
                  <div className={`slider-content slider-info w-fit ${activeIndex === index ? "" : "hidden"}`}>
                    <h3 className=' text-[10px] lg:text-xl  text-black'>{item?.name}</h3>
                    <p className='text-[8px] lg:text-sm'>{item?.designation}</p>
                  </div>
                </div>
                <div className={`slider-content text-[8px] lg:text-xs text-[#232323] slider-des p-2 lg:p-6 ${activeIndex === index ? "" : "hidden"}`}>
                  {item?.description}
                </div>
        <SliderController handleNext={handleNext} handlePrev={handlePrev} />

              </div>
            </div>
    </React.Fragment>
  )
}
