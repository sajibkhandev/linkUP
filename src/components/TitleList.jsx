import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TitleList = ({title,className}) => {
  return (
     <div className={`flex justify-between items-center ${className}`}>
         <h3 className="text-base text-black font-semibold font-pop">{title}</h3>
        <BsThreeDotsVertical className="text-[#5F35F5] text-sm"/>
       </div>
  )
}

export default TitleList