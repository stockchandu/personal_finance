import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const sideBarConfig = [
  {
    name: "Home",
    id: 1,
    icon: <HomeIcon/>,
  },
  {
    name: "Liabilities",
    id: 2,
    icon: <CreditScoreIcon/>,
  },
  {
    name: "Investments",
    id: 3,
    icon: <ShowChartIcon/>,
  },
  {
    name: "Saving(PF+Bank)",
    id: 4,
    icon: <SavingsIcon/>,
  },
  {
    name: "Money OutFlow",
    id: 5,
    icon: <MoneyOffIcon/>,
  },
  {
    name: "Money Inflows",
    id: 6,
    icon: <AttachMoneyIcon/>,
  },
];

export const SidebarItems = (
  <>
    {sideBarConfig.map((sidebar) => {
      return (
        <ListItemButton key={sidebar.id} >
          <ListItemIcon>
            {sidebar.icon}
          </ListItemIcon>
          <ListItemText primary={sidebar.name} />
        </ListItemButton>
      );
    })}
  </>
);
