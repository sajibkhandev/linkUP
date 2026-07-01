import React from 'react'
import Image from './Image'

const MakeProfile = ({mainClassName,profileImage,profileName,profileStatus,buttonText}) => {
  return (
    <div className={`flex items-center justify-between border-b border-black/30 pb-2 ${mainClassName}`}>
        <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-full">
          <Image className='w-full h-full rounded-full object-cover' src={profileImage}/>
        </div>
        <div>
           <h4 className="text-base text-black font-semibold ">{profileName}</h4>
           <p className="text-xs text-[#4D4D4D] font-normal ">{profileStatus}</p>
         </div>
        </div>
         <button className="text-sm text-white font-semibold rounded-md bg-[#5F35F5] px-5 py-0.5">{buttonText}</button>
        </div>
  )
}

export default MakeProfile