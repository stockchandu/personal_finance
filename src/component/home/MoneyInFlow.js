import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const MoneyInflow = (
  section,
  typoStyle,
  formatNumber,
  mpfData
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const getMIData = (data) =>
    data?.filter((item) => item.section === "Money Inflows");
  const calculateMI = (data, key) => {
    const filterMI = getMIData(data);
    return filterMI.reduce((init, item) => init + item[key], 0);
  };
  const remainMI =
    calculateMI(mpfData, "inReceiveAmount") -
    calculateMI(mpfData, "inPaidAmount");
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {section?.sectionName}
        </Typography>
        <Divider sx={{ marginBottom: 1 ,marginTop:1}} />
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Inflow Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
          {formatNumber(calculateMI(mpfData, "inReceiveAmount"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Inflow Paid</Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
           {formatNumber(calculateMI(mpfData, "inPaidAmount"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain Inflow Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
           {formatNumber(remainMI)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total No of MoneyInflow</Typography>
          <Typography sx={{ ...typoStyle }}>
            {getMIData(mpfData).length}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};
