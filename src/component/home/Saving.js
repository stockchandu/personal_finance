import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";
import Divider from "@mui/material/Divider";
export const Saving = (section, typoStyle, formatNumber, handleNavigation) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600" }}
        >
          {section?.sectionName}
        </Typography>
        <Divider sx={{marginBottom:1}}/>
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(section?.remainAmount)}
          </Typography>
        </Typography>
      </Typography>
      <DetailsButton
        text="Check Details"
        onClick={() => handleNavigation("Saving(PF+Bank)")}
      >
        Check Details
      </DetailsButton>
    </>
  );
};
