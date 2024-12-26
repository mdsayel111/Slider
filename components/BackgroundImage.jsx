import { IMAGE_SPACES_URL } from '@/utils/APIS/websiteContentApi/websiteContentApi'
import Image from 'next/image'
import React from 'react'

export default function BackgroundImage({data}) {
  return (
      <>
      <div className="relative w-full h-full">
              <Image
                height={500}
                width={500}
                src={IMAGE_SPACES_URL + data?.image}
                alt="Example Image"
                className="w-full h-full object-contain filter grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/40"></div>
            </div>
            <h1 className="absolute top-[20%] text-5xl lg:text-8xl font-bold text-gray-300 text-center w-full z-[-1]">
              {data?.name}
            </h1>
      </>
  )
}
