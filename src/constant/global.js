export const global = {
  appTitle: "My Personal Finance",
};

export const color = {
  RED: "#D12F2E",
  GREEN: "#086908",
  SIDE_ITEMS: "#2364AD",
  TOP_SIDEBAR: "#1B263B",
  APP_BAR: "#2364AD",
  BLUE: "#136CFB",
  YELLOW: "#F8EF19",
};

export const TOAST_SUCCESS = {
  create: {
    open: true,
    message: "Created successfully",
    bgColor: "#00D26A",
    duration: 2000,
  },
  update: {
    open: true,
    message: "Updated successfully",
    bgColor: "#00D26A",
    duration: 2000,
  },
  delete: {
    open: true,
    message: "Remove successfully",
    bgColor: "#F84150",
    duration: 2000,
  },
};

export const TOAST_ERROR = {
  open: true,
  message: "Something went wrong ",
  bgColor: "#F84150",
  duration: 2000,
};

export const mpfKey = {
  LIABILITY: "Liabilities",
  INVESTMENT: "Investment",
  SAVING: "Savings(PF+Bank)",
  MONEYOUT: "Money Outflows",
  MONEYIN: "Money Inflows",
  EARNEDMONEY: "EarnedMoney",
  INSURANCE: "Insurance",
  VEHICLE: "Vehicles",
};

export const disabledFields = [
  "id",
  "sectionName",
  "section",
  "created_at",
  "paidAmount",
  "emi",
  "totalMonth",
  "endYear",
  "remainMonth",
  "extraAmount",
  "outMoneyDate",
  "inDate",
  "loanPrincipal",
  "totalInterest",
  "remainPrincipal",
  "totalLoanPaid",
  "rateOfInterest",
  // TODO : ENABLE after talk with bank how part payment works
  // HDFC Bank - upto 25% with 2 payment during whole tenure and 1 time only financial year
  "partPayment",
  "profit",
  "outRemain",
  "inRemainAmount",
  "remainAmount",
  "myPFShare",
  "companyPFShare",
  "monthlyShare",
  "insuranceDate",
  "policyNumber",
  "sumAssured",
  "paidPolicyPremium",
  "premiumAmount",
  "totalPolicyMonth",
  "remainPolicyMonth",
  "policyMaturityDate",
  "policyMaturityAmount",
  "vehicleRCNumber",
  "vehiclePurchasedValue",
  "vehicleType",
  "vehiclePurchasedDate",
  "engineNumber",
  "chasisNumber",
  "vehicleOwnerName",
  "loanCategory",
  "emiDate",
  "nextEMIDate",
  "companyJoinDate",
  "totalEarn",
  "policyInstallmentDate",
  "startEMIDate",
  "totalServiceMonth",
];
export const removeFields = [
  "id",
  "created_at",
  "section",
  "myPFShare",
  "companyPFShare",
  "savingCategory",
];
export const sortHomeTiles = [
  "Liabilities",
  "Money Inflows",
  "Investment",
  "Savings(PF+Bank)",
  "Money Outflows",
];
