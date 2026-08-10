import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineCancel } from "react-icons/md";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import toast, { Toaster } from "react-hot-toast";


const TitleList = ({title,className,addContent}) => {
    const db = getDatabase();
  let [popup,setPopup]=useState(false)
  let [groupname,setGroupName]=useState("")

  let handleCrateGroup=()=>{
    set(push(ref(db, "mygroups/")), {
          groupname:groupname,
          groupimage:"https://i.ibb.co.com/VWNLQgbD/700702-network-512x512.png",
          groupmember:[]
        }).then(()=>{
          setPopup(false)
          toast.success("Group Created")
        })
    
    
  }
  return (
     <div className={`flex justify-between items-center ${className}`}>
      <Toaster />
         <h3 className="text-base text-white font-semibold font-pop">{title}</h3>
         {
          addContent && 
         <button onClick={()=>setPopup(true)} className='text-white bg-white/40 py-1 px-3 rounded-md text-xs'>{addContent}</button>
         }
        <BsThreeDotsVertical className="text-[#fff] text-sm"/>


       {
        popup &&
         <div className='absolute top-0 left-0 w-full h-full  z-40 flex justify-center items-center'>
           <div className='flex flex-col gap-y-3 justify-center items-center w-[500px] py-20 bg-sky-300 rounded-md'>
            <MdOutlineCancel onClick={()=>setPopup(false)} className='relative -top-[55px] left-[220px] text-white z-40 text-2xl' />

            <h2 className='text-white text-3xl font-bold'>Group Name: </h2>
            <input value={groupname} onChange={(e)=>setGroupName(e.target.value)} className='border border-black rounded-md py-1 px-3 w-[260px]' type="text" />
           <div >
             <button onClick={()=>setPopup(false)} className='text-white py-1 px-4 bg-blue-500 rounded'>Cancel</button>
            <button onClick={handleCrateGroup} className='ml-4 text-white py-1 px-4 bg-red-500 rounded'>Create</button>
           </div>
           </div>
        </div>
       }



       </div>
  )
}

export default TitleList