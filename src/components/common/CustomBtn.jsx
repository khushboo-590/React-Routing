import React from 'react'

const CustomBtn = ({btn,className}) => {
  return (
      <button className={` text-white px-4 py-2 rounded-md ${className}`}>{ btn}</button>
  )
}

export default CustomBtn
