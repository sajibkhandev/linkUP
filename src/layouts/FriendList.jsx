import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import SearchBar from "../components/SearchBar";
import TitleList from "../components/TitleList";
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const FriendList = () => {
   const db = getDatabase();
   let [alluser, setAllUser] = useState([]);

   let data = useSelector((state) => state.activeuser.value);


   useEffect(() => {
    const userRef = ref(db, "friends/");
    let arr = [];
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        if(data.uid==item.val().receiverid || data.uid==item.val().senderid){

          arr.push({...item.val()});
        }
        
      
      });
      setAllUser(arr);
    });
  }, []);

  
  return (
    <div>
      <SearchBar />

      <div className=" mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
        <TitleList className="py-3" title="Friends" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">
          
          {
            alluser.map(item=>(
              <MakeProfile
            mainClassName=""
            profileImage={data.uid==item.receiverid ? item.receiverprofile : item.senderprofile}
            profileName={data.uid==item.receiverid ? item.sendername : item.receivername}
            profileStatus={`Follow me`}
            buttonText={`block`}
            
          />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FriendList;
