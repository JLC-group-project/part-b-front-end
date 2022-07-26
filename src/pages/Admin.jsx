import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

function Admin({ url }) {
  const { user, isAuthenticated, isLoading, error, loginWithRedirect } =
    useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* {isAuthenticated ? <h1>Welcome {user.name}</h1> : loginWithRedirect({ redirect_uri: `${url}/admin` })} */}
      {isAuthenticated && (
        <h1 className="text-3xl font-bold underline">Welcome {user.name}</h1>
      )}
    </>
  );
}

export default withAuthenticationRequired(Admin, {
  onRedirecting: () => <Loading />,
  returnTo: "/admin",
});
