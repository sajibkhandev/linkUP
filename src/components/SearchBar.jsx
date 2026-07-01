import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
     <div className="relative w-full rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white">
          <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-base"/>

          <input className="px-12 w-full py-2 rounded-[20px] outline-0 placeholder:text-sm text-sm" type="text" placeholder="Search"/>
          <BsThreeDotsVertical className="absolute top-1/2 -translate-y-1/2 right-4 text-sm text-[#5F35F5]"/>

        </div>
  )
}

export default SearchBar