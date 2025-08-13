import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`px-[20px] py-[10px] bg-black text-white w-[90px] text-center ${className}`}>{badgeText}</div>
  )
}

export default Badge