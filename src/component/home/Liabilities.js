import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { mpfKey } from "../../constant/global";
export const Liabilities = (section, typoStyle, formatNumber, mpfData) => {
  const investStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const getLiabilityData = (data) =>
    data
      ?.filter((item) => item.section === mpfKey.LIABILITY)
      .filter((item) => item.isActive === true);
  const calculateLiability = (data, key) => {
    const filterLiability = getLiabilityData(data);
    return filterLiability.reduce((init, item) => init + item[key], 0);
  };

  const calculateTotaPrincipal = (data) => {
    const filterLiability = getLiabilityData(data);
    return filterLiability.reduce(
      (init, loan) => init + loan.emi * loan.totalMonth,
      0
    );
  };
  const calculateTotalPaid = (data) => {
    const filterLiability = getLiabilityData(data);
    return filterLiability.reduce(
      (init, loan) => init + loan.paidMonth * loan.emi,
      0
    );
  };
  const loanInterest =
    calculateTotaPrincipal(mpfData) -
    calculateLiability(mpfData, "loanPrincipal");
  const remainPI =
    calculateTotaPrincipal(mpfData) - calculateTotalPaid(mpfData);
  const remainEMI =
    calculateLiability(mpfData, "totalMonth") -
    calculateLiability(mpfData, "paidMonth");
  return (
    <>
      <Typography sx={{ height: 260 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {section?.sectionName}
        </Typography>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Fixed Loan Principal </Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(calculateLiability(mpfData, "loanPrincipal"))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Fixed Loan Interest </Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(loanInterest)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Principal + Interest Paid</Typography>
          <Typography sx={{ ...typoStyle, color: "green" }}>
            {formatNumber(calculateTotalPaid(mpfData))}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain Principal + Interest</Typography>
          <Typography sx={{ ...typoStyle, color: "red" }}>
            {formatNumber(remainPI)}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total EMI</Typography>
          <Typography sx={typoStyle}>
            {calculateLiability(mpfData, "totalMonth")}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Paid EMI</Typography>
          <Typography sx={typoStyle}>
            {calculateLiability(mpfData, "paidMonth")}
          </Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Remain EMI</Typography>
          <Typography sx={typoStyle}>{remainEMI}</Typography>
        </Typography>

        <Typography sx={investStyle}>
          <Typography sx={typoStyle}>Total No of Liabilities </Typography>
          <Typography sx={typoStyle}>
            {getLiabilityData(mpfData).length}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};
