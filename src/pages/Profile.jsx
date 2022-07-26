import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (<Loading />) : (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile