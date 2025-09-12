import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default Profile;
