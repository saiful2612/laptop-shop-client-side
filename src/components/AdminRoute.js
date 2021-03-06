import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import Loader from "./Loader/Loader";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useContext(AuthContext);
  if (loading || !admin) {
    return <Loader />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
