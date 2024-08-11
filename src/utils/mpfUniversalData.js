import { formatNumber } from "./formatNumber";
export const getMpfUniversalData = (row) => {
  return {
    Liabilities: [
      { header: "Principal", value: formatNumber(row.loanPrincipal) },
      { header: "EMI", value: formatNumber(row.emi) },
      { header: "Paid EMI", value: row.paidMonth },
      { header: "O/S EMI", value: row.remainMonth },
      { header: "Total Loan Paid", value: formatNumber(row.totalLoanPaid) },
      { header: "Total Interest", value: formatNumber(row.totalInterest) },
      {
        header: "O/S Principal + Interest",
        value: formatNumber(row.remainPrincipal),
      },
      { header: "Rate Of Interest", value: `${row.rateOfInterest} %` },
      { header: "Total EMI", value: row.totalMonth },
      { header: "End EMI", value: row.endYear },
    ],
    Investment: [
      { header: "Date Of Investment", value: row.year },
      { header: "Invest Amount", value: formatNumber(row.investAmount) },
      { header: "Current Invest", value: formatNumber(row.currentInvest) },
      { header: "Profit", value: formatNumber(row.profit) },
      { header: "Redeem", value: formatNumber(row.investRedeem) },
    ],
    "Savings(PF+Bank)": [
      { header: "Total Amount", value: formatNumber(row.totalAmount) },
      { header: "Withdrawal", value: formatNumber(row.redeem) },
      { header: "Remain Amount", value: formatNumber(row.remainAmount) },
    ],
    "Money Outflows": [
      { header: "Date", value: row.outMoneyDate },
      { header: "Amount", value: formatNumber(row.outMoney) },
      { header: "Received Amount", value: formatNumber(row.outReceivedMoney) },
      { header: "Remain Amount", value: formatNumber(row.outRemain) },
    ],
    "Money Inflows": [
      { header: "Date", value: row.inDate },
      { header: "Amount", value: formatNumber(row.inReceiveAmount) },
      { header: "Paid", value: formatNumber(row.inPaidAmount) },
      { header: "Remain Amount", value: formatNumber(row.inRemainAmount) },
    ],
    EarnedMoney: [
      { header: "Date Of Joining", value: row.companyJoinDate },
      { header: "Total CTC", value: formatNumber(row.totalCTC) },
      {
        header: "Monthly Avg Salary",
        value: formatNumber(row.monthSalary),
      },
      { header: "Exist Date", value: row.existDate },
      { header: "Total Earned", value: formatNumber(row.totalEarn) },
    ],
    Insurance: [
      { header: "Date", value: row.insuranceDate },
      { header: "Policy Id", value: row.policyNumber },
      { header: "Paid Month", value: row.policyPaidMonth },
      { header: "Remain Policy Month", value: row.remainPolicyMonth },
      { header: "Total Policy Month", value: row.totalPolicyMonth },
      {
        header: "Paid Premium Amount",
        value: formatNumber(row.paidPolicyPremium),
      },
      { header: "Sum Assured", value: formatNumber(row.sumAssured) },
      { header: "Monthly Premium", value: formatNumber(row.premiumAmount) },
      { header: "Maturity Date", value: row.policyMaturityDate },
      {
        header: "Maturity Amount",
        value: formatNumber(row.policyMaturityAmount),
      },
    ],
    Vehicles: [
      { header: "Date Of Purchased", value: row.vehiclePurchasedDate },
      { header: "Type", value: row.vehicleType },
      { header: "Owner Name", value: row.vehicleOwnerName },
      {
        header: "Purchased Value",
        value: formatNumber(row.vehiclePurchasedValue),
      },
      { header: "No Of Years ", value: row.vehicleYears },
      { header: "Registration Number", value: row.vehicleRCNumber },
      { header: "Owner Sno", value: row.vehicleOwnerNo },
      { header: "Chasis Number", value: row.chasisNumber },
      { header: "Engine Number", value: row.engineNumber },
      { header: "Insurance Name", value: row.vehicleInsuranceName },
      { header: "Insurance Valid Upto", value: row.vehicleInsuranceValid },
      {
        header: "PUC Certificate Number",
        value: row.vehiclePUCNumber,
      },
      {
        header: "PUC Certificate Valid Upto",
        value: row.vehiclePUCValid,
      },
      {
        header: "Fitness Certficate Valid Upto",
        value: row.vehicleFitnessValid,
      },
    ],
  };
};
