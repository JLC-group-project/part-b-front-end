import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

// Wraps route elements for authenticated users only
function ProtectedRoute({ component, ...args }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
    returnTo: "/admin",
  });

  return <Component {...args} />;
}

export default ProtectedRoute;
