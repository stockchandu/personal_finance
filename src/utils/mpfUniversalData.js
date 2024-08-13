import { formatNumber } from "./formatNumber";
import { getInstallmentDates } from "./getInstallmentDate";

const getFormattedDate = (date) => {
  if (date) {
    const [day, month, year] = date.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);
    return new Date() > formattedDate;
  }
};
export const getMpfUniversalData = (row) => {
  return {
    Liabilities: [
      { header: "Loan Category", value: row.loanCategory },
      { header: "Principal", value: formatNumber(row.loanPrincipal),color: "red"  },
      { header: "EMI", value: formatNumber(row.emi) },
      { header: "Paid EMI", value: row.paidMonth,color: "green"  },
      { header: "EMI Date", value: `${row.emiDate} of every month` },
      {
        header: "Current EMI Date",
        value: getInstallmentDates(row.emiDate).prevDate,
      },
      {
        header: "Next EMI Date",
        value: getInstallmentDates(row.emiDate).nextDate,
        color: "red",
      },
      { header: "O/S EMI", value: row.remainMonth,color: "red"  },
      { header: "Total Loan Paid", value: formatNumber(row.totalLoanPaid),color: "green"  },
      { header: "Total Interest", value: formatNumber(row.totalInterest),color: "red"  },
      {
        header: "O/S Principal + Interest",
        value: formatNumber(row.remainPrincipal),
        color: "red" 
      },
      { header: "Rate Of Interest", value: `${row.rateOfInterest} %` },
      { header: "Total EMI", value: row.totalMonth },
      { header: "End EMI", value: row.endYear },
    ],
    Investment: [
      { header: "Date Of Investment", value: row.year },
      { header: "Invest Amount", value: formatNumber(row.investAmount) },
      { header: "Current Invest", value: formatNumber(row.currentInvest) },
      {
        header: "P/L",
        value: formatNumber(row.profit),
        color: row.currentInvest > row.investAmount ? "green" : "red",
      },
      { header: "Redeem", value: formatNumber(row.investRedeem) },
    ],
    "Savings(PF+Bank)": [
      { header: "Total Amount", value: formatNumber(row.totalAmount) },
      { header: "Withdrawal", value: formatNumber(row.redeem) },
      {
        header: "Remain Amount",
        value: formatNumber(row.remainAmount),
        color: "green",
      },
    ],
    "Money Outflows": [
      { header: "Date", value: row.outMoneyDate },
      { header: "Amount", value: formatNumber(row.outMoney), color: "red" },
      {
        header: "Received Amount",
        value: formatNumber(row.outReceivedMoney),
        color: row.outReceivedMoney !== 0 && "green",
      },
      {
        header: "Remain Amount",
        value: formatNumber(row.outRemain),
        color: "red",
      },
    ],
    "Money Inflows": [
      { header: "Date", value: row.inDate },
      {
        header: "Amount",
        value: formatNumber(row.inReceiveAmount),
        color: "red",
      },
      { header: "Paid", value: formatNumber(row.inPaidAmount), color: "green" },
      {
        header: "Remain Amount",
        value: formatNumber(row.inRemainAmount),
        color: "red",
      },
    ],
    EarnedMoney: [
      { header: "Date Of Joining", value: row.companyJoinDate },
      { header: "Total CTC", value: formatNumber(row.totalCTC) },
      {
        header: "Monthly Avg Salary",
        value: formatNumber(row.monthSalary),
      },
      { header: "Exist Date", value: row.existDate, color: "red" },
      { header: "Total Service Month", value: row.totalServiceMonth },
      {
        header: "Total Earned",
        value: formatNumber(row.totalEarn),
        color: "green",
      },
    ],
    Insurance: [
      { header: "Date", value: row.insuranceDate },
      { header: "Policy Id", value: row.policyNumber },
      { header: "Paid Month", value: row.policyPaidMonth },
      {
        header: "Current Installment Date",
        value: getInstallmentDates(row.policyInstallmentDate).prevDate,
      },
      {
        header: "Next Installment Date",
        value: getInstallmentDates(row.policyInstallmentDate).nextDate,
        color: "red",
      },
      { header: "Remain Policy Month", value: row.remainPolicyMonth },
      { header: "Total Policy Month", value: row.totalPolicyMonth },
      {
        header: "Paid Premium Amount",
        value: formatNumber(row.paidPolicyPremium),
      },
      { header: "Sum Assured", value: formatNumber(row.sumAssured) },
      { header: "Monthly Premium", value: formatNumber(row.premiumAmount) },
      {
        header: "Maturity Date",
        value: row.policyMaturityDate,
        color: "green",
      },
      {
        header: "Maturity Amount",
        value: formatNumber(row.policyMaturityAmount),
        color: "green",
      },
    ],
    Vehicles: [
      { header: "Date Of Purchased", value: row.vehiclePurchasedDate },
      { header: "Type", value: row.vehicleType },
      { header: "Owner Name", value: row.vehicleOwnerName },
      {
        header: "Purchased Value",
        value: formatNumber(row.vehiclePurchasedValue),
        color: "red" 
      },
      { header: "No Of Years ", value: row.vehicleYears },
      { header: "Registration Number", value: row.vehicleRCNumber },
      { header: "Owner Sno", value: row.vehicleOwnerNo },
      { header: "Chasis Number", value: row.chasisNumber },
      { header: "Engine Number", value: row.engineNumber },
      { header: "Insurance Name", value: row.vehicleInsuranceName },
      {
        header: "Insurance Valid Upto",
        value: row.vehicleInsuranceValid,
        isExpiry: (() => getFormattedDate(row.vehicleInsuranceValid))(),
      },
      {
        header: "PUC Certificate Number",
        value: row.vehiclePUCNumber,
      },
      {
        header: "PUC Certificate Valid Upto",
        value: row.vehiclePUCValid,
        isExpiry: (() => getFormattedDate(row.vehiclePUCValid))(),
      },
      {
        header: "Fitness Certficate Valid Upto",
        value: row.vehicleFitnessValid,
        isExpiry: (() => getFormattedDate(row.vehicleFitnessValid))(),
      },
    ],
  };
};
