import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import TitleList from "../components/TitleList";
import SearchBar from "../components/SearchBar";
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequestList = () => {
  const db = getDatabase();
  let [friendRequest, setFriendRequest] = useState([]);
    let data = useSelector((state) => state.activeuser.value);
  

  useEffect(() => {
    const friendRequestRef = ref(db, "frientrequestlist/");
    let arr = [];
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        if(data.uid==item.val().receiverid){

          arr.push({ ...item.val(),id:item.key});
        }
       
        
      });
      setFriendRequest(arr);
    });
  }, []);

  let handleAccept=(item)=>{
    // console.log(item.id);
      set(push(ref(db, "friends/" )), {
        ...item
        }).then(()=>{
          remove(ref(db, "frientrequestlist/" +item.id))
        });
    
  }

  

  return (
    <div>
      <SearchBar />

      <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
        <TitleList className="py-3" title="Friend  Request" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">

          {
            friendRequest.map(item=>(

              <MakeProfile
                mainClassName=""
                profileImage={item.senderprofile}
                profileName={item.sendername}
                profileStatus={`Follow me`}
                buttonText={`Accept`}
                onclick={() => handleAccept(item)}
              />
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;
