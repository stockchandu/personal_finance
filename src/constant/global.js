export const global = {
  appTitle: "My Personal Finance",
};

export const color = {
  RED: "#D12F2E",
  GREEN: "#086908",
  TOP_SIDEBAR: "#2364AD",
};

// All key that match to DB section name
export const mpfKey = {
  LIABILITY: "Liabilities",
  INVESTMENT: "Investment",
  SAVING: "Savings(PF+Bank)",
  MONEYOUT: "Money Outflows",
  MONEYIN: "Money Inflows",
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
  "partPayment",
  "profit",
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
