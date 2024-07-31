import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";
import Divider from "@mui/material/Divider";

export const Investment = (
  section,
  typoStyle,
  formatNumber,
  handleNavigation
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const colorBasedPL = () => {
    return section?.currentInvest > section?.investAmount ? "green" : "red";
  };

  const calculatePL=()=> section?.currentInvest - section?.investAmount 
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600"}}
        >
          {section?.sectionName}
        </Typography>
        <Divider sx={{marginBottom:1}}/>
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Invest</Typography>
          <Typography sx={typoStyle}>
            {formatNumber(section?.investAmount)}
          </Typography>
        </Typography>
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Current Amount</Typography>
          <Typography sx={typoStyle}>
            {formatNumber(section?.currentInvest)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Profit </Typography>
          <Typography sx={{ ...typoStyle,color:colorBasedPL()}}>
            {formatNumber(calculatePL())}
          </Typography>
        </Typography>
      </Typography>
      <DetailsButton
        text="Check Details"
        onClick={() => handleNavigation("Investments")}
      >
        Check Details
      </DetailsButton>
    </>
  );
};
