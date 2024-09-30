import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
      if (location.pathname === "/login" || location.pathname === "/signup") {
        navigate("/", { replace: false });
      }
    }
  }, [location, navigate, setLoggedIn]);
  return null;
}

export default RefreshHandler;
