import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Message = () => {
    let navigate=useNavigate()

  let data=useSelector(state=>state.activeuser.value)
  useEffect(()=>{
    if(data==null){
      navigate("/")
    }
  },[])

  return (
    <div>Message</div>
  )
}

export default Message