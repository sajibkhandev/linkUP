import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
    let navigate=useNavigate()

  let data=useSelector(state=>state.activeuser.value)
  useEffect(()=>{
    if(data==null){
      navigate("/")
    }
  },[])
  return (
    <div>Setting</div>
  )
}

export default Setting