import React from "react";
import MakeProfile from "../components/MakeProfile";
import SearchBar from "../components/SearchBar";
import TitleList from "../components/TitleList";
import Profile2 from "../assets/profile2.jpg";

const FriendList = () => {
  return (
    <div>
      <SearchBar />

      <div className=" py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white">
        <TitleList className="py-3" title="Friends" />

        <div className="flex overflow-y-scroll  h-[170px] flex-col gap-y-3 ">
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName="border-transparent"
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName="border-transparent"
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName="border-transparent"
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName="border-transparent"
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName="border-transparent"
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendList;
