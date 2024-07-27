const constant = {
  LIABILITY: "Liabilities",
  INVESTMENT: "Investment",
  SAVING: "Savings(PF+Bank)",
  MO: "Money Outflows",
  MI: "Money Inflows",
};

const getSection = (data, sName) => {
  return data.find((sec) => sec.sectionName === sName);
};

export const calculateNetworth = (data) => {
  const isData = data && data?.length > 0;
  const filteredData = isData && data.slice(0, 5);
  const liabilityValue = getSection(filteredData, constant.LIABILITY);
  const investValue = getSection(filteredData, constant.INVESTMENT);
  const savingValue = getSection(filteredData, constant.SAVING);
  const moValue = getSection(filteredData, constant.MO);
  const miValue = getSection(filteredData, constant.MI);
  const liability =
    parseInt(liabilityValue.remainAmount) + parseInt(miValue.totalAmount);
  const saving =
    parseInt(investValue.investAmount) +
    parseInt(savingValue.remainAmount) +
    parseInt(moValue.totalAmount);
  const myNetWorth = saving - liability;
  return myNetWorth
};
