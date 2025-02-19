import React from "react";

const isAuthenticated = true;


function HocAuthentication(Component) {
  return function () {
    if (!isAuthenticated) {
      return <div>User not Authenticated</div>;
    }

    return <Component />;
  };
}

export default HocAuthentication;
