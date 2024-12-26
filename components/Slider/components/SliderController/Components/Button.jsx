import React from 'react'

export default function Button({Icon, onClick}) {
  return (
    <button className="text-black text-xl lg:text-5xl" onClick={onClick}>
    <Icon />
    </button>
  )
}
