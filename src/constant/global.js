export const global = {
  appTitle: "My Personal Finance",
};

export const color = {
  RED: "#D12F2E",
  GREEN: "#086908",
  SIDE_ITEMS : "#2364AD",
  TOP_SIDEBAR: "#1B263B",
  APP_BAR : "#2364AD",
  BLUE:"#136CFB",
  YELLOW:"#F8EF19"
};

// All key that match to DB section name
export const mpfKey = {
  LIABILITY: "Liabilities",
  INVESTMENT: "Investment",
  SAVING: "Savings(PF+Bank)",
  MONEYOUT: "Money Outflows",
  MONEYIN: "Money Inflows",
  EARNEDMONEY:'EarnedMoney',
  INSURANCE : 'Insurance',
  VEHICLE : 'Vehicles'
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
  // "totalAmount",
  // "remainAmount",
  "extraAmount",
  "outMoneyDate",
  "inDate",
  "loanPrincipal",
  "totalInterest",
  "remainPrincipal",
  "totalLoanPaid",
  "rateOfInterest",
  //   TODO : ENABLE after talk with bank how part payment works
  // HDFC Bank - upto 25% with 2 payment during whole tenure and 1 time only financial year
  // 
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
  "vehicleOwnerName"
];

// Textfiled remove
export const removeFields = ["id", "created_at", "section"];

// sorting home page tiles
export const sortHomeTiles = [
  "Liabilities",
  "Money Inflows",
  "Investment",
  "Savings(PF+Bank)",
  "Money Outflows",
];
