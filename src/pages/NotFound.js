import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate  takes two parameters, "path" and attributes "replace" and "state" with the same meaning as NavLink and Link
      // state is really useful when we want to pass down information while navigating
      navigate("/", { state: "Error, bad page requested" }); // instead of "/" , you can use negative 1 (-1), which means back to the previous page
    }, 20000);
  }, []);
  //<Navigate>  navigates through components
  //return <Navigate to="/" />
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}

export default NotFound;
