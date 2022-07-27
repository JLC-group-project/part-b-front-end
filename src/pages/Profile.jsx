import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <Loading />
  ) : (
      <div className="flex justify-center">
        <div className="w-[1200px]">
          <div className="m-20">
            <h2 className="text-5xl text-center  font-bold ">
              Profile Information
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="mb-4 flex-col items-center w-[500px] justify-between ">
              {isAuthenticated && (
                <div className="bg-gray-800 rounded  mt-5 flex relative">
                  <div className="mr-10">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-[128px] rounded h-[128px]"
                    />
                  </div>
                  <div className="mt-6 relative align-middle">
                    <h2 className="text-white text-2xl">{user.name}</h2>
                    <h1 className="text-white text-xl">{user.email}</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
