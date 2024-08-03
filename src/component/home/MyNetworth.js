import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { calculateNetworth } from "../../utils/calcNetworth";
import { formatNumber } from "../../utils/formatNumber";

export const MyNetworth = ({section}) =>{
    const [totalSaving , totalLiabilities,myNetWorth] = calculateNetworth(section);
    const myNetworthTitle = "My Networth";
    const netWorthFormulaTitle = "All Oustanding Liabilities - Cash in Hand + Savings + Investment";
    const colorBasedNW = () => {
      return totalSaving > totalLiabilities ? "green" : "red";
    };
    return (
        <Grid item xs={12} md={4} lg={4} mb={2}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700"}}
          >
            {myNetworthTitle}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "600" ,color:colorBasedNW()}}
          >
            {formatNumber(myNetWorth)}
          </Typography>
          <Typography
            sx={{ fontSize: "10px", fontWeight: "600"}}
          >
            {netWorthFormulaTitle}
          </Typography>
        </Paper>
      </Grid>
    )
}