import React from 'react'
import Button from './Components/Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function SliderController({handleNext, handlePrev}) {
  return (
    <div className="mx-auto space-x-4 lg:space-x-10 w-fit absolute bottom-0 left-1/2 translate-x-[-50%] slider-controller">
        <Button Icon={MdKeyboardArrowLeft} onClick={handlePrev} />
        <Button Icon={MdKeyboardArrowRight} onClick={handleNext} />
    </div>
  )
}
