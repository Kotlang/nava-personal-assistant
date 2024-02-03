import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
function PrivateRoute() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <Outlet />
  )
}

export default PrivateRoute;