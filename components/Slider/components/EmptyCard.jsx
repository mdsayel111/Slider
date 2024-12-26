import React from 'react'

export default function EmptyCard({className, index, activeIndex, sliderContainerWidth}) {
  return (
    <React.Fragment key={index}>
                <div style={{ width: sliderContainerWidth / 7 }}>
                  
                </div>
        </React.Fragment>
  )
}
