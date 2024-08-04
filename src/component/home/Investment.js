import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const Investment = (
  section,
  typoStyle,
  formatNumber,
  mpfData
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const getInvestData = (data) =>
    data?.filter((item) => item.section === "Investment");
  const calculateInvestment = (data, key) => {
    const filterInvest = getInvestData(data);
    return filterInvest.reduce((init, item) => init + item[key], 0);
  };
  const colorBasedPL = () => {
    return calculateInvestment(mpfData, "currentInvest") >
      calculateInvestment(mpfData, "investAmount")
      ? "green"
      : "red";
  };

  const totalPL =
    calculateInvestment(mpfData, "currentInvest") -
    calculateInvestment(mpfData, "investAmount");

  const totalROI =
    ( totalPL/calculateInvestment(mpfData, "investAmount")) * 100;

  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {section?.sectionName}
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Invest </Typography>
          <Typography sx={typoStyle}>
            {formatNumber(calculateInvestment(mpfData, "investAmount"))}
          </Typography>
        </Typography>
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Current Invest</Typography>
          <Typography sx={typoStyle}>
            {formatNumber(calculateInvestment(mpfData, "currentInvest"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total P/L </Typography>
          <Typography sx={{ ...typoStyle, color: colorBasedPL() }}>
            {formatNumber(totalPL)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total ROI </Typography>
          <Typography sx={{ ...typoStyle, color: colorBasedPL() }}>
            {totalROI.toFixed(2)}%
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total No of Investment </Typography>
          <Typography sx={{ ...typoStyle }}>
            {getInvestData(mpfData).length}
          </Typography>
        </Typography>
      </Typography>
     
    </>
  );
};
