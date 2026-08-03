import React, { useEffect, useState } from 'react'
import MakeProfile from '../components/MakeProfile'
import TitleList from '../components/TitleList'
import SearchBar from '../components/SearchBar'
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const BlockList = () => {
   const db = getDatabase();
  let [alluser, setAllUser] = useState([]);

  let data = useSelector((state) => state.activeuser.value);
   useEffect(() => {
      const userRef = ref(db, "blocks/");
      let arr = [];
      onValue(userRef, (snapshot) => {
        snapshot.forEach((item) => {
          if(item.val().blockbyid!=data.uid){
            arr.push({ ...item.val(),id:item.key });
          }
          
        });
        setAllUser(arr);
      });
    }, []);
  return (
    <div>
        <SearchBar />

          <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
            <TitleList className="py-3" title="Blocked Users" />

            <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">

              {
                alluser.map(item=>(

                  <MakeProfile
                    mainClassName=""
                    profileImage={item.blockbyprofile}
                    profileName={item.blockby}
                    profileStatus={`Follow me`}
                    buttonText={`unblock`}
                  />
                ))
              }
             
            </div>
          </div>
    </div>
  )
}

export default BlockList