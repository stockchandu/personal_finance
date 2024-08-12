export const getInstallmentDates = (emiDate) => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth()).padStart(2, "0");
  const year = currentDate.getFullYear();
  const date = new Date(year, month, day);
  date.setMonth(date.getMonth() + 1);
  const newMonth = String(date.getMonth() + 1).padStart(2, "0");
  const prevMonth = String(newMonth - 1).padStart(2, "0");
  const newYear = date.getFullYear();
  return {
    nextDate: `${emiDate}/${newMonth}/${newYear}`,
    prevDate: `${emiDate}/${prevMonth}/${newYear}`,
  };
};
