
export const isSectionName = (sectionName) => {
    return (
      sectionName === "EarnedMoney" ||
      sectionName === "Vehicles" ||
      sectionName === "Liabilities" ||
      sectionName === "Investment" ||
      sectionName === "Savings(PF+Bank)" ||
      sectionName === "Insurance"
    );
  };

  export const updateFormBasedSection = (data, formValue) => {
    switch (data?.section) {
      case "Liabilities":
        if (formValue?.paidMonth) {
          const totalPIncludingInt = data?.emi * data?.totalMonth;
          const totalLoanPaid = data?.emi * formValue?.paidMonth;
          const remainMonth = data?.totalMonth - formValue?.paidMonth;
          const remainPrincipal = totalPIncludingInt - totalLoanPaid;
          return {
            paidMonth: formValue?.paidMonth,
            remainMonth,
            remainPrincipal,
            totalLoanPaid,
          };
        }
        //   TODO :  after talk with bank how part payment works, write the logic
        // else if (formValue?.partPayment) {
        //   const paidAmount = data?.emi * formValue?.paidMonth;
        //   return {};
        // }
        else {
          return formValue;
        }
      case "Investment":
        if (formValue?.investAmount) {
          // if same investamount put then add logic to check if its same then keep prev current
          const prevInvestAmt = formValue?.investAmount - data?.investAmount;
          const newCurrInvest = prevInvestAmt + data?.currentInvest;
          const profit = newCurrInvest - formValue?.investAmount;
          return {
            investAmount: formValue?.investAmount,
            currentInvest: newCurrInvest,
            profit,
          };
        } else if (formValue?.currentInvest) {
          const profit = formValue?.currentInvest - data?.investAmount;
          return {
            currentInvest: formValue?.currentInvest,
            profit,
          };
        } else if (formValue?.investRedeem) {
          const currentInvest = data?.currentInvest - formValue?.investRedeem;
          return {
            currentInvest,
            investAmount: currentInvest,
            investRedeem: formValue?.investRedeem,
          };
        } else {
          return formValue;
        }
      case "Money Inflows":
        if (formValue?.inPaidAmount) {
          const inRemainAmount =
            data?.inReceiveAmount - formValue?.inPaidAmount;
          return {
            inRemainAmount,
            inPaidAmount: formValue?.inPaidAmount,
          };
        } else if (formValue?.inReceiveAmount) {
          const inRemainAmount =
            formValue?.inReceiveAmount - data?.inPaidAmount;
          return {
            inRemainAmount,
            inReceiveAmount: formValue?.inReceiveAmount,
          };
        } else {
          return formValue;
        }

      case "Money Outflows":
        if (formValue?.outReceivedMoney) {
          const outRemain = data?.outMoney - formValue?.outReceivedMoney;
          return {
            outRemain,
            outReceivedMoney: formValue?.outReceivedMoney,
          };
        } else if (formValue?.outMoney) {
          const outRemain = formValue?.outMoney - data?.outReceivedMoney;
          return {
            outRemain,
            outMoney: formValue?.outMoney,
          };
        } else {
          return formValue;
        }
      case "Savings(PF+Bank)":
        if (formValue?.redeem) {
          const remainAmount = data?.totalAmount - formValue?.redeem;
          return {
            remainAmount,
            redeem: formValue?.redeem,
          };
        } else if (formValue?.totalAmount) {
          const totalAmount = formValue?.totalAmount;
          const remainAmount = formValue?.totalAmount - data?.redeem;
          return {
            totalAmount,
            remainAmount,
          };
        } else if (formValue?.monthlyPFShare) {
          const monthPF = formValue?.monthlyPFShare * 2;
          const totalAmount = data?.totalAmount + monthPF;
          const remainAmount = totalAmount - data?.redeem;
          const myPFShare = data?.myPFShare + formValue?.monthlyPFShare;
          const companyPFShare =
            data?.companyPFShare + formValue?.monthlyPFShare;
          return {
            totalAmount,
            remainAmount,
            companyPFShare,
            myPFShare,
          };
        } else {
          return formValue;
        }
      case "EarnedMoney":
        if (formValue?.isActive) {
          const isActive = formValue?.isActive;
          return {
            isActive,
          };
        } else if (formValue?.totalServiceMonth) {
          const totalServiceMonth = formValue?.totalServiceMonth
          return {
            totalServiceMonth,
          };
        }else {
          return formValue;
        }
      case "Vehicles":
        if (formValue?.isActive) {
          const isActive = formValue?.isActive;
          return {
            isActive,
          };
        } else {
          return formValue;
        }
      case "Insurance":
        if (formValue?.policyPaidMonth) {
          const paidPolicyPremium =
            formValue?.policyPaidMonth * data?.premiumAmount;
          const remainPolicyMonth =
            data?.totalPolicyMonth - formValue?.policyPaidMonth;
          return {
            paidPolicyPremium,
            remainPolicyMonth,
            policyPaidMonth: formValue?.policyPaidMonth,
          };
        } else {
          return formValue;
        }
      default:
        return formValue;
    }
  };