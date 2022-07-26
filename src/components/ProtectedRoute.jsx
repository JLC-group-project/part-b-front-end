import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

function ProtectedRoute({ component, ...args }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
    returnTo: "/admin",
  });

  return <Component {...args} />;
}

// export default ProtectedRoute
// const ProtectedRoute = ({ component, ...args }) => (
//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => <Loading />,
//     })}
//     {...args}
//   />
// );

// export default ProtectedRoute;

export default ProtectedRoute;
