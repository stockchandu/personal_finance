import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";
import Divider from "@mui/material/Divider";
export const Liabilities = (
  section,
  typoStyle,
  formatNumber,
  handleNavigation
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
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
          <Typography sx={typoStyle}>Total Amount </Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(section?.totalAmount)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Amount Paid</Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(section?.paidAmount)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(section?.remainAmount)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Months</Typography>
          <Typography sx={typoStyle}>{section?.totalMonth}</Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Completed Months</Typography>
          <Typography sx={typoStyle}>{section?.paidMonth}</Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain Months</Typography>
          <Typography sx={typoStyle}>{section?.totalMonth}</Typography>
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
