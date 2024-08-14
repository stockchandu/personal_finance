const constant = {
  LIABILITY: "Liabilities",
  INVESTMENT: "Investment",
  SAVING: "Savings(PF+Bank)",
  MO: "Money Outflows",
  MI: "Money Inflows",
};

const getSection = (data, sName) => {
  return (
    data &&
    data
      .filter((sec) => sec.section === sName)
      .filter((item) => item.isActive === true)
  );
};

const calculateTotaLoanPrincipal = (data) => {
  return (
    data && data.reduce((init, loan) => init + loan.emi * loan.totalMonth, 0)
  );
};

const calculateTotalLoanPaid = (data) => {
  return (
    data && data.reduce((init, loan) => init + loan.paidMonth * loan.emi, 0)
  );
};

const calculateSum = (data, key) => {
  return data && data.reduce((init, item) => init + item[key], 0);
};

const allLiability = (sectionData) => {
  const liability = getSection(sectionData, constant.LIABILITY);
  const totalLoanAmt = calculateTotaLoanPrincipal(liability);
  const totalPaid = calculateTotalLoanPaid(liability);
  const outstanding = totalLoanAmt - totalPaid;
  return outstanding;
};

const allInvestment = (sectionData) => {
  const investment = getSection(sectionData, constant.INVESTMENT);
  const currentInvest = calculateSum(investment, "currentInvest");
  return currentInvest;
};

const allSaving = (sectionData) => {
  const saving = getSection(sectionData, constant.SAVING);
  const totalSave = calculateSum(saving, "totalAmount");
  const redeemSave = calculateSum(saving, "redeem");
  return totalSave - redeemSave;
};

const allMoneyInflow = (sectionData) => {
  const moneyInflow = getSection(sectionData, constant.MI);
  const totalMI = calculateSum(moneyInflow, "inReceiveAmount");
  const paidMI = calculateSum(moneyInflow, "inPaidAmount");
  return totalMI - paidMI;
};

const allMoneyOutflow = (sectionData) => {
  const moneyOutflow = getSection(sectionData, constant.MO);
  // const totalMO = calculateSum(moneyOutflow, "outMoney");
  const receivedMO = calculateSum(moneyOutflow, "outReceivedMoney");
  // return totalMO - receivedMO
  return receivedMO;
};

export const calculateNetworth = (data) => {
  const isData = data && data?.length > 0;
  if (isData) {
    const sectionData = data;
    const liabilityValue = allLiability(sectionData);
    const investValue = allInvestment(sectionData);
    const savingValue = allSaving(sectionData);
    const miValue = allMoneyInflow(sectionData);
    const moValue = allMoneyOutflow(sectionData);
    const totalLiabilities = liabilityValue + miValue;
    const totalSaving = investValue + savingValue + moValue;
    const myNetWorth = totalSaving - totalLiabilities;
    return [totalSaving, totalLiabilities, myNetWorth];
  }
};
