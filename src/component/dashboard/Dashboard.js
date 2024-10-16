import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { usePush } from "../../hooks/usePush";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";
import MPFDialog from "../common/Dialog";
import { useLoginData } from "../../hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { Sidebar } from "./Sidebar";
import { MPFAppBar } from "./AppBar";
import { MainContainer } from "./MainContainer";
import { TOAST_ERROR } from "../../constant/global";
import { openToast } from "../../store/toast/toastSlicer";
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
      <Sidebar handleNavigation={handleNavigation} />
      <MainContainer />
    </Box>
  );
};
