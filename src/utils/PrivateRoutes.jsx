import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

//File
import { getUserData } from "@/state/Auth/AuthSlice";

//Redux
import { useSelector, useDispatch } from "react-redux";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  const { loggedInUser } = useSelector((state) => state.auth);

  return loggedInUser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
