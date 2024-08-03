import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SavingsIcon from "@mui/icons-material/Savings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useLocation } from "react-router-dom";
import { useMPFData } from "../../hooks/useSelector";

const greenColor = "#086908";
const redColor = "#D12F2E";

const sideBarConfig = [
  {
    name: "Home",
    id: 1,
    icon: <HomeIcon />,
    path: "/",
    bg: "",
  },
  {
    name: "Liabilities",
    id: 2,
    icon: <CreditScoreIcon />,
    path: "/liability",
    bg: redColor,
  },
  {
    name: "Money Inflows",
    id: 6,
    icon: <AttachMoneyIcon />,
    path: "/money-in",
    bg: greenColor,
  },
  {
    name: "Investment",
    id: 3,
    icon: <ShowChartIcon />,
    path: "/invest",
    bg: greenColor,
  },
  {
    name: "Savings(PF+Bank)",
    id: 4,
    icon: <SavingsIcon />,
    path: "/saving",
    bg: greenColor,
  },
  {
    name: "Money Outflows",
    id: 5,
    icon: <MoneyOffIcon />,
    path: "/money-out",
    bg: redColor,
  },

];

export const SidebarItems = () => {
  const { isMPFData } = useMPFData();
  const location = useLocation();
  const bgColorBasedRoutes = (route) => {
    switch (route) {
      case "/liability":
        return redColor;
      case "/invest":
        return greenColor;
      case "/saving":
        return greenColor;
      case "/money-out":
        return greenColor;
      case "/money-in":
        return redColor;
      default:
        break;
    }
  };

  const isSameRoute = (sidebar) => location.pathname === sidebar.path;
  const sideBarStyle=(sidebar)=>{
    return {
      backgroundColor:
        isSameRoute(sidebar) && bgColorBasedRoutes(location.pathname),
      color: isSameRoute(sidebar) && location.pathname !== "/" && "white",
      "&:hover": {
        backgroundColor:
        isSameRoute(sidebar) && bgColorBasedRoutes(location.pathname),
        color:
          isSameRoute(sidebar) && location.pathname !== "/" && "white",
      },
    }
  }

  return (
    <>
      {sideBarConfig.map((sidebar) => (
        <ListItemButton
          key={sidebar.id}
          sx={sideBarStyle(sidebar)}
          disabled={ isMPFData ? false : true}
        >
          <ListItemIcon
            sx={{
              color:
                isSameRoute(sidebar) && location.pathname !== "/" && "white",
            }}
          >
            {sidebar.icon}
          </ListItemIcon>
          <ListItemText primary={sidebar.name} />
        </ListItemButton>
      ))}
    </>
  );
};
