import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import TitleList from "../components/TitleList";
import SearchBar from "../components/SearchBar";
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();
  let [alluser, setAllUser] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "userlist/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setAllUser(arr);
    });
  }, []);
  console.log(alluser);
  

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
            />
          ))}
          </div>
      </div>
    </div>
  );
};

export default UserList;
