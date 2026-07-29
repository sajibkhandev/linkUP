import React, { useEffect, useState } from "react";
import MakeProfile from "../components/MakeProfile";
import TitleList from "../components/TitleList";
import SearchBar from "../components/SearchBar";
import Profile2 from "../assets/profile2.jpg";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const UserList = () => {
  const db = getDatabase();
  let [alluser, setAllUser] = useState([]);
  let [concatFriendRequest, setConcatFriendRequest] = useState([]);
  let [concatFriend, setConcatFriend] = useState([]);

  let data = useSelector((state) => state.activeuser.value);

  useEffect(() => {
    const userRef = ref(db, "userlist/");
    let arr = [];
    onValue(userRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key != data.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setAllUser(arr);
    });
  }, []);

  let handleAddFriend = (item) => {
    // console.log(item.profileurl);
    // console.log(data.photoURL);

    set(push(ref(db, "friendrequestlist/")), {
      sendername: data.displayName,
      senderid: data.uid,
      senderprofile: data.photoURL,
      receivername: item.username,
      receiverid: item.id,
      receiverprofile: item.profileurl,
    }).then(() => {
      toast.success("Send Friend Request")
     
    });
  };

  useEffect(() => {
    const friendRequestRef = ref(db, "friendrequestlist/");
    let arr = [];
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().receiverid + item.val().senderid);
      });
      setConcatFriendRequest(arr);
    });
  }, []);

  useEffect(() => {
    const friendRequestRef = ref(db, "friends/");
    let arr = [];
    onValue(friendRequestRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().receiverid + item.val().senderid);
      });
      setConcatFriend(arr);
    });
  }, []);

  return (
    <div>
      <Toaster />
      <SearchBar />

      <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
        <TitleList className="py-3" title="User List" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">
          {alluser.map((item) =>
            concatFriend.includes(item.id + data.uid) ||
            concatFriend.includes(data.uid + item.id) ? (
              <MakeProfile
                mainClassName=""
                profileImage={item.profileurl}
                profileName={item.username}
                profileStatus={`Follow me`}
                buttonText={`friend`}
              />
            ) : concatFriendRequest.includes(item.id + data.uid) ||
              concatFriendRequest.includes(data.uid + item.id) ? (
              <MakeProfile
                mainClassName=""
                profileImage={item.profileurl}
                profileName={item.username}
                profileStatus={`Follow me`}
                buttonText={`cancel`}
              />
            ) : (
              <MakeProfile
                mainClassName=""
                profileImage={item.profileurl}
                profileName={item.username}
                profileStatus={`Follow me`}
                buttonText={`join`}
                onclick={() => handleAddFriend(item)}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
