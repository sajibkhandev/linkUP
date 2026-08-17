import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GroupList from '../layouts/GroupList';
import FriendList from '../layouts/FriendList';
import TitleList from '../components/TitleList';
import Image from '../components/Image';
import Profile from '../assets/profile2.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FiSend } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";





const Message = () => {
  let navigate = useNavigate()

  let data = useSelector(state => state.activeuser.value)
  useEffect(() => {
    if (data == null) {
      navigate("/")
    }
  }, [])

  return (
    <div className="py-6 pr-10">
      <Grid container spacing={2}>
        <Grid size={5}>
          <GroupList />
          <div className='mt-5'>
            <FriendList />

          </div>
        </Grid>
        <Grid size={7}>
          <div className='rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F] w-full h-full'>

            <div className='py-3 mx-6 flex justify-between items-center border-b border-[#7797be]'>
              <div className='flex gap-x-4 items-center'>
                <div className='relative w-17 h-17 rounded-full'>
                  <Image className='w-full h-full rounded-full object-cover' src={Profile} />
                  <div className='absolute bottom-0 right-3 w-2.5 h-2.5 rounded-full bg-green-500'></div>
                </div>
                <div>
                  <h3 className='text-xl text-white font-semibold'>Naymer</h3>
                  <p className='text-xs text-white font-normal'>Online</p>
                </div>

              </div>
              <BsThreeDotsVertical className='text-white text-xl' />
            </div>
            <div className='px-6 py-10 h-[62vh]  overflow-y-scroll w-full '>

              <div className='w-[420px]   '>
                <p className='px-6  py-4 inline-block bg-[#7797be] rounded-xl'>hi this is sajib khan </p>

              </div>
             <div className='flex justify-end'>
               <div className='w-[420px]  '>
                <p className='px-6 text-white py-4 inline-block bg-[#275fa4] rounded-xl'>hi this is sajib khan . error maiores laudantium, omnis quisquam assumenda velit.</p>

              </div>
             </div>


              
            </div>


            <div className='w-full  flex justify-between items-center'>
              
              <div className="mt-2 relative mx-8 w-[84%]  rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#7797be]">
                

                <input className="px-4 w-full py-2 rounded-[20px] outline-0 placeholder:text-sm text-sm text-white placeholder:text-white" type="text"  />


                <MdOutlineEmojiEmotions className="absolute top-1/2 -translate-y-1/2 right-9 text-sm text-white"/>

                <MdOutlineCameraAlt className="absolute top-1/2 -translate-y-1/2 right-4 text-sm text-white"/>


              </div>



              <div className='flex items-center justify-center mr-6 mt-3 rounded-lg w-[60px] h-[50px] bg-[#7797be]'>
                <FiSend className='text-xl text-white'/>
              </div>

            </div>





          </div>
        </Grid>


      </Grid>

    </div>
  )
}

export default Message