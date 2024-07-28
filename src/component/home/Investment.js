import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";

export const Investment = (
  section,
  typoStyle,
  formatNumber,
  handleNavigation
) => {
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
        >
          {section?.sectionName}
        </Typography>
        <Typography sx={typoStyle}>
          {" "}
          Total Invest : {formatNumber(section?.investAmount)}
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
