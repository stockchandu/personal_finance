import React from "react";
import Typography from "@mui/material/Typography";
import { DetailsButton } from "./common/DetailsButton";
import Divider from "@mui/material/Divider";

export const MoneyOutFlow = (
  section,
  typoStyle,
  formatNumber,
  handleNavigation,
  mpfData
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const getMOData = (data) =>
    data?.filter((item) => item.section === "Money Outflows");
  const calculateMO = (data, key) => {
    const filterMO = getMOData(data);
    return filterMO.reduce((init, item) => init + item[key], 0);
  };
  const remainMO =
    calculateMO(mpfData, "outMoney") - calculateMO(mpfData, "outPaidMoney");
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {section?.sectionName}
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total OutFlow Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(calculateMO(mpfData, "outMoney"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Outflow Received </Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(calculateMO(mpfData, "outPaidMoney"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain Outflow </Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(remainMO)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total No of MoneyOutflow </Typography>
          <Typography sx={{ ...typoStyle }}>
            {getMOData(mpfData).length}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};
