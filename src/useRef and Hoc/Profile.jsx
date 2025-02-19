import React from "react";
import HocAuthentication from "./HocAuthentication";

function Profile() {
  return <div>Profile</div>;
  
}

export default HocAuthentication(Profile);
