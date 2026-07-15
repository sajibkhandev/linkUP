import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import TitleList from "../components/TitleList";
import SearchBar from "../components/SearchBar";
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useSelector } from "react-redux";

const UserList = () => {
  const db = getDatabase();
  let [alluser, setAllUser] = useState([]);

  let data = useSelector((state) => state.activeuser.value);
 
  

  useEffect(() => {
    const starCountRef = ref(db, "userlist/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key != data.uid) {
          arr.push({...item.val(),id:item.key});
        }
      });
      setAllUser(arr);
    });
  }, []);

  let handleAddFriend = (item) => {
    // console.log(item);

    set(ref(db, "frientrequestlist/" ), {
      sendername: data.displayName,
      senderid: data.uid,
      receivername: item.username,
      receiverid:item.id
    });
  };

  return (
    <div>
      <SearchBar />

      <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
        <TitleList className="py-3" title="User List" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">
          {alluser.map((item) => (
            <MakeProfile
              mainClassName=""
              profileImage={item.profileurl}
              profileName={item.username}
              profileStatus={`Follow me`}
              buttonText={`Join`}
              onclick={() => handleAddFriend(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
