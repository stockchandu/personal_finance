export const filterMPFData = (isMPFData, mpfData, section) =>
  isMPFData && mpfData.filter((item) => item.section === section);
