import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { usePush } from "../../hooks/usePush";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";
import MPFDialog from "../common/Dialog";
import { useLoginData } from "../../hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { MPFAppBar } from "./AppBar";
import { MainContainer } from "./MainContainer";
import { TOAST_ERROR } from "../../constant/global";
import { openToast } from "../../store/toast/toastSlicer";
const Sidebar = React.lazy(() =>
  import("./Sidebar").then((module) => ({ default: module.Sidebar }))
);

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useLoginData();
  const navigation = usePush();
  const handleNavigation = (evt) => {
    navigation(evt.target.innerText);
  };

  const getAllMPFData = async () => {
    try {
      const { data, error } = await apiService.getMPFData();
      dispatch(saveMpfData(data));
      if (error) {
        dispatch(openToast({ open: true, ...TOAST_ERROR }));
      }
    } catch (err) {
      dispatch(openToast({ open: true, ...TOAST_ERROR }));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    if (!localStorage.getItem("persist:root")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getAllMPFData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <MPFDialog />
      <CssBaseline />
      <MPFAppBar
        handleLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      <Suspense fallback={<Skeleton count={1} height={400} />}>
        <Sidebar handleNavigation={handleNavigation} />
      </Suspense>
      <MainContainer />
    </Box>
  );
};
