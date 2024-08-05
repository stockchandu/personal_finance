import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation } from "react-router-dom";
import { useMPFData } from "../../hooks/useSelector";
import { color } from "../../constant/global";

export const SidebarItems = ({ sideBarConfig }) => {
  const { isMPFData } = useMPFData();
  const location = useLocation();
  const bgColorBasedRoutes = (route) => {
    switch (route) {
      case "/liability":
        return color.RED;
      case "/invest":
        return color.GREEN;
      case "/saving":
        return color.GREEN;
      case "/money-out":
        return color.GREEN;
      case "/money-in":
        return color.RED;
      case "/earned-money":
        return color.TOP_SIDEBAR;
      case "/insurance":
        return color.TOP_SIDEBAR
      case "/money-rule":
        return color.TOP_SIDEBAR
      case "/vehicles":
        return color.TOP_SIDEBAR
      case "/documents":
        return color.TOP_SIDEBAR
      default:
        break;
    }
  };

  const isSameRoute = (sidebar) =>
    location.pathname !== "/" && location.pathname === sidebar.path;
  const sideBarStyle = (sidebar) => {
    if (isSameRoute(sidebar)) {
      const bgStyle = bgColorBasedRoutes(location.pathname);
      return {
        backgroundColor: bgStyle,
        color: "white",
        "&:hover": {
          backgroundColor: bgStyle,
          color: "white",
        },
      };
    }
  };

  return (
    <>
      {sideBarConfig.map((sidebar) => (
        <ListItemButton
          key={sidebar.id}
          sx={sideBarStyle(sidebar)}
          disabled={isMPFData ? false : true}
        >
          <ListItemIcon
            sx={{
              color: isSameRoute(sidebar) && "white",
            }}
          >
            {sidebar.icon}
          </ListItemIcon>
          <ListItemText primary={sidebar.name} sx={{ marginLeft: -2 }} />
        </ListItemButton>
      ))}
    </>
  );
};
