import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import TitleList from "../components/TitleList";
import SearchBar from "../components/SearchBar";
import Profile2 from "../assets/profile2.jpg";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const FriendRequestList = () => {
  const db = getDatabase();
  let [friendRequest, setFriendRequest] = useState([]);
  let data = useSelector((state) => state.activeuser.value);

  useEffect(() => {
    const friendRequestRef = ref(db, "friendrequestlist/");
    let arr = [];
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (data.uid == item.val().receiverid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendRequest(arr);
    });
  }, []);

  let handleAccept = (item) => {
    // console.log(item.id);
    set(push(ref(db, "friends/")), {
      ...item,
    })
      .then(() => {
        toast.success("Accept Friend Request");
      })
      .then(() => {
        remove(ref(db, "friendrequestlist/" + item.id));
      })
      
  };
  let handlecancel = (item) => {
    // console.log(item.id);
    remove(ref(db, "friendrequestlist/" + item.id))
    .then(() => {
        toast.success("Cancel Friend Request");
      });;
  };

  return (
    <div>
      <Toaster />
      <SearchBar />

      <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
        <TitleList className="py-3" title="Friend  Request" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">
          {friendRequest.map((item) => (
            <MakeProfile
              mainClassName=""
              profileImage={item.senderprofile}
              profileName={item.sendername}
              profileStatus={`Follow me`}
              buttonText={`cancel`}
              onclick={() => handlecancel(item)}
              type="secondbtnneed"
              buttonTextTwo="Accept"
              onclicktwo={() => handleAccept(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;
