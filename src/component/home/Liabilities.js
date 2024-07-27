import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";

export const Liabilities = (
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
          Paid : {formatNumber(section?.paidAmount)}
        </Typography>
        <Typography sx={typoStyle}>
          {" "}
          Total Amount : {formatNumber(section?.totalAmount)} lac
        </Typography>
        <Typography sx={typoStyle}>
          {" "}
          Remain Amount : {formatNumber(section?.remainAmount)} lac
        </Typography>
        <Typography sx={typoStyle}>
          {" "}
          Total Months : {section?.totalMonth}
        </Typography>
        <Typography sx={typoStyle}>
          {" "}
          Remain Months : {section?.remainMonth}
        </Typography>
      </Typography>

      <DetailsButton
        text="Check Details"
        onClick={() => handleNavigation("Liabilities")}
      >
        Check Details
      </DetailsButton>
    </>
  );
};
