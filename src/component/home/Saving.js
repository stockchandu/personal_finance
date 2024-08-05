import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
export const Saving = (
  section,
  typoStyle,
  formatNumber,
  mpfData
) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const getSavingData = (data) =>
    data?.filter((item) => item.section === "Savings(PF+Bank)");
  const calculateSaving = (data, key) => {
    const filterSaving = getSavingData(data);
    return filterSaving.reduce((init, item) => init + item[key], 0);
  };
  const remainSaving =
    calculateSaving(mpfData, "totalAmount") -
    calculateSaving(mpfData, "redeem");
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {section?.sectionName}
        </Typography>
        <Divider sx={{ marginBottom: 1,marginTop:1 }} />
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Saving Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(calculateSaving(mpfData, "totalAmount"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Withdrawal Amount</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(calculateSaving(mpfData, "redeem"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total Remain </Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(remainSaving)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total No of Savings </Typography>
          <Typography sx={{ ...typoStyle }}>
            {getSavingData(mpfData).length}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};
