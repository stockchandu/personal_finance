import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { Drawer } from "../common/Drawer";
import { AppBar } from "../common/AppBar";
import { Outlet } from "react-router-dom";
import { SidebarItems } from "../common/Sidebar";
import { global } from "../../constant/global";
import { usePush } from "../../hooks/usePush";
import { Upload } from "../common/Upload";
import { db } from "../../config/db";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";
import MPFDialog from "../common/Dialog";
import Loader from "../common/Loader";
import { openLoader } from "../../store/loader/loaderSlicer";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = usePush();
  const handleNavigation = (evt) => {
    navigation(evt.target.innerText);
  };

  useEffect(() => {
    dispatch(openLoader(true))
    getAllMPFData();
  }, []);

  async function getAllMPFData() {
    try {
      const { data,error } = await db.from("my_personal_finance").select();
      dispatch(saveMpfData(data));
      if (error) {
        console.error("Error updating data:");
      } else {
        console.log("Update successful:", data, );
      }
    } catch (err) {
      console.error("Unexpected error:");
    }finally{
      dispatch(openLoader(false))
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MPFDialog />
      <Loader/>
      <CssBaseline />
      <AppBar position="absolute" open={true}>
        <Toolbar
          sx={{
            pr: "24px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {global.appTitle}
          </Typography>
          <Upload />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        ></Toolbar>
        <Divider />
        <List
          component="nav"
          onClick={(e) => {
            handleNavigation(e);
          }}
        >
          <SidebarItems />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
