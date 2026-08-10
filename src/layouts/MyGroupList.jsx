import React, { useEffect, useState } from 'react'
import MakeProfile from '../components/MakeProfile'
import TitleList from '../components/TitleList'
import SearchBar from '../components/SearchBar'
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { MdOutlineCancel } from 'react-icons/md';

const MyGroupList = () => {
  const db = getDatabase();
  let [mygroup, setMygroup] = useState([]);
  let [popup,setPopup]=useState(false)
  let [friend,setFriend]=useState([])
  useEffect(() => {
    const mygroupRef = ref(db, "mygroups/");
    let arr = [];
    onValue(mygroupRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });


      });
      setMygroup(arr);
    });
  }, []);



   useEffect(() => {
    const friendsRef = ref(db, "userlist/");
    let arr = [];
    onValue(friendsRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });


      });
      setFriend(arr);
    });
  }, []);


  let handleAddMember=()=>{
    
  }




  return (
    <div>
      <SearchBar />

      <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">

        <TitleList addContent="Create Group" className="py-3" title="My Groups" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">

          {
            mygroup.map(item => (

              <MakeProfile
                mainClassName=""
                profileImage={item.groupimage}
                profileName={item.groupname}
                profileStatus={`Follow me`}
                buttonText={`Add Member`}
                onclick={()=>setPopup(true)}
              />
            ))
          }

        </div>
      </div>


      {/* Add member Popup */}
      {

        popup &&

      <div className='absolute top-0 left-0 w-full h-full  z-40 flex justify-center items-center'>
        <div className='flex flex-col gap-y-3 justify-center items-center w-[500px] h-[500px] overflow-y-scroll bg-sky-300 rounded-md'>
          <MdOutlineCancel onClick={()=>setPopup(false)}  className='relative -top-[55px] left-[220px] text-white z-40 text-2xl' />

          <h2 className='pb-5 text-white text-3xl font-bold'>Mern 2504 </h2>
          <p className='pb-5 text-black/50 text-xl font-semibold'>All Users </p>

          <div className='w-full px-15'>
            {
              friend.map(item=>(
                <MakeProfile
                mainClassName=""
                profileImage={item.profileurl}
                profileName={item.username}
                profileStatus={`Follow me`}
                onclick={()=>handleAddMember(item)}
                buttonText={`Add`}
              />
              ))
            }
           
          </div>
          
          
        </div>
      </div>
      }


    </div>
  )
}

export default MyGroupList