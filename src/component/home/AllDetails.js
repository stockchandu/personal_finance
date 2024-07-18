import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { apiConfig } from "../../api/axios";
import { Drawer } from "../common/Drawer";
import { AppBar } from "../common/AppBar";
import { mainListItems } from "../../constant/listItems";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const StyledButton = styled(Button)(({ theme, text }) => ({
  backgroundColor: "#4F81BD",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#4F81BD",
  },
  borderRadius: "6px",
  textTransform: "none",
  fontSize: "16px",
  width: "50%",
  margin: "auto",
}));

export const AllDetails = ()=>{
    const [section, setSection] = useState([]);

    useEffect(() => {
      const fetchList = async () => {
        const res = await apiConfig.get("eej92wocxjchy");
        setSection(res.data);
      };
  
      fetchList();
    }, []);
  
    const formatNumber = (number) => {
      const formatter = new Intl.NumberFormat("en-IN");
      return formatter.format(parseInt(number));
    };
  
    const typoStyle = {
      fontSize: "15px", fontWeight: "600", marginBottom: 1
    }
  
    const renderLiability = (section) => {
      return (
        <>
          <Typography sx={{ height: 260 ,border:"1px solid red"}}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
            >
              {section?.sectionName}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Paid : {formatNumber(section?.paidAmount)}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Total Amount : {formatNumber(section?.totalAmount)} lac
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Remain Amount : {formatNumber(section?.remainAmount)} lac
            </Typography>
            <Typography sx={typoStyle}> Total Months : {section?.totalMonth}</Typography>
            <Typography sx={typoStyle}> Remain Months : {section?.remainMonth}</Typography>
          </Typography>
  
          <StyledButton text="Check Details">Check Details</StyledButton>
        </>
      );
    };
  
    const renderInvestment = (section) => {
      return (
        <>
          <Typography sx={{ height: 260 ,border:"1px solid red"}}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
            >
              {section?.sectionName}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Total Invest : {formatNumber(section?.investAmount)}
            </Typography>
          </Typography>
          <StyledButton text="Check Details">Check Details</StyledButton>
        </>
      );
    };
  
    const renderSavings = (section) => {
      return (
        <>
          <Typography sx={{ height: 260 ,border:"1px solid red"}}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
            >
              {section?.sectionName}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Total Amount : {formatNumber(section?.totalAmount)} 
            </Typography>
          </Typography>
  
          <StyledButton text="Check Details">Check Details</StyledButton>
        </>
      );
    };
  
    
    const renderMoneyInflow = (section) => {
      return (
        <>
          <Typography sx={{ height: 260 ,border:"1px solid red"}}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
            >
              {section?.sectionName}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Total Amount : {formatNumber(section?.totalAmount)} 
            </Typography>
          </Typography>
  
          <StyledButton text="Check Details">Check Details</StyledButton>
        </>
      );
    };
  
    const renderMoneyOutFlow = (section) => {
      return (
        <>
          <Typography sx={{ height: 260 ,border:"1px solid red"}}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
            >
              {section?.sectionName}
            </Typography>
            <Typography
              sx={typoStyle}
            >
              {" "}
              Total Amount : {formatNumber(section?.totalAmount)} 
            </Typography>
          </Typography>
  
          <StyledButton text="Check Details">Check Details</StyledButton>
        </>
      );
    };
    const renderSection = (section) => {
      switch (section.sectionName) {
        case "Liabilities":
          return renderLiability(section);
        case "Investment":
          return renderInvestment(section);
        case "Savings":
            return renderSavings(section);
        case "Money Outflows":
          return renderMoneyOutFlow(section);
        case "Money Inflows":
          return renderMoneyInflow(section);
        default:
          break;
      }
    };
    return (
          <Grid container spacing={3}>
            {section.map((section) => {
              return (
                <>
                  <Grid item xs={12} md={4} lg={4} key={section.id}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 290,
                      }}
                    >
                      {renderSection(section)}
                    </Paper>
                  </Grid>
                </>
              );
            })}
          </Grid>
    )
}