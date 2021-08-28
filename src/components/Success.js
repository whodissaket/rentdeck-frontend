import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Success = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    //logging out
    history.push("/");
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  });
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">rentdeck</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
    </div>
  );
};
export default Success;
