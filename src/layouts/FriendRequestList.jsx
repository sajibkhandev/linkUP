import React from 'react'
import MakeProfile from '../components/MakeProfile'
import TitleList from '../components/TitleList'
import SearchBar from '../components/SearchBar'
import Profile2 from "../assets/profile2.jpg";

const FriendRequestList = () => {
  return (
     <div>
        <SearchBar />

          <div className="mt-3 py-4 px-5  rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#243F5F]">
            <TitleList className="py-3" title="Friend  Request" />

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
              
            </div>
          </div>
    </div>
  )
}

export default FriendRequestList