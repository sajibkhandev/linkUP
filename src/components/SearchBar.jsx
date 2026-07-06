import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
     <div className="relative w-full rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
          <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-base text-white"/>

          <input className="px-12 w-full py-2 rounded-[20px] outline-0 placeholder:text-sm text-sm text-white placeholder:text-white" type="text" placeholder="Search"/>
          <BsThreeDotsVertical className="absolute top-1/2 -translate-y-1/2 right-4 text-sm text-white"/>

        </div>
  )
}

export default SearchBar