import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { usePush } from "../../hooks/usePush";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";
import MPFDialog from "../common/Dialog";
import { openLoader } from "../../store/loader/loaderSlicer";
import { useLoginData } from "../../hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { Sidebar } from "./Sidebar";
import { MPFAppBar } from "./AppBar";
import { MainContainer } from "./MainContainer";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useLoginData();
  const navigation = usePush();
  const handleNavigation = (evt) => {
    navigation(evt.target.innerText);
  };

  useEffect(() => {
    dispatch(openLoader(true));
    getAllMPFData();
  }, []);

  const getAllMPFData = async () => {
    try {
      const { data, error } = await apiService.getMPFData();
      dispatch(saveMpfData(data));
      if (error) {
        console.error("Error updating data:");
      }
    } catch (err) {
      console.error("Unexpected error:");
    } finally {
      dispatch(openLoader(false));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    if (!localStorage.getItem("persist:root")) {
      navigate("/login");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MPFDialog />
      <CssBaseline />
      <MPFAppBar
        handleLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      <Sidebar handleNavigation={handleNavigation} />
      <MainContainer />
    </Box>
  );
};
