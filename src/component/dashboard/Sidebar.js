import { color, global } from "../../constant/global";
import { SidebarItems } from "../common/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SavingsIcon from "@mui/icons-material/Savings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import RuleIcon from '@mui/icons-material/Rule';
import { toolbarStyle } from "./style/sidebarStyle";
import { Drawer } from "../common/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export const Sidebar = ({handleNavigation}) => {
  const sideMainList = [
    {
      name: "Overview",
      id: 1,
      icon: <HomeIcon />,
      path: "/",
      bg: color.TOP_SIDEBAR,
    },
    {
      name: "Liabilities",
      id: 2,
      icon: <CreditScoreIcon />,
      path: "/liability",
      bg: color.RED,
    },
    {
      name: "Money Inflows",
      id: 6,
      icon: <AttachMoneyIcon />,
      path: "/money-in",
      bg: color.GREEN,
    },
    {
      name: "Investment",
      id: 3,
      icon: <ShowChartIcon />,
      path: "/invest",
      bg: color.GREEN,
    },
    {
      name: "Savings",
      id: 4,
      icon: <SavingsIcon />,
      path: "/saving",
      bg: color.GREEN,
    },
    {
      name: "Money Outflows",
      id: 5,
      icon: <MoneyOffIcon />,
      path: "/money-out",
      bg: color.RED,
    },
  ];

  const sideSubList = [
    {
      name: "Earned Money",
      id: 2,
      icon: <AttachMoneyIcon />,
      path: "/earned-money",
      bg: color.RED,
    },
    {
      name: "Insurance",
      id: 6,
      icon: <HealthAndSafetyIcon />,
      path: "/insurance",
      bg: color.GREEN,
    },
    
    {
      name: "Vehicle Details",
      id: 10,
      icon: <DirectionsCarIcon />,
      path: "/vehicles",
      bg: color.GREEN,
    },
    {
      name: "Documents",
      id: 13,
      icon: <DocumentScannerIcon />,
      path: "/documents",
      bg: color.GREEN,
    },
    {
      name: "Money Rules",
      id: 3,
      icon: <RuleIcon />,
      path: "/money-rule",
      bg: color.GREEN,
    },
  ];
  return (
    <Drawer variant="permanent" open>
      <Toolbar
        sx={toolbarStyle}
      >
        <h3>{global.appTitle}</h3>
      </Toolbar>
      <List
        component="nav"
        onClick={(e) => {
          handleNavigation(e);
        }}
        sx={{padding:0}}

      >
        <SidebarItems sideBarConfig={sideMainList}/>
      </List>
      <Divider />
      <List
        component="nav"
        onClick={(e) => {
          handleNavigation(e);
        }}
      >
        <SidebarItems sideBarConfig={sideSubList}/>
      </List>
    </Drawer>
  );
};
