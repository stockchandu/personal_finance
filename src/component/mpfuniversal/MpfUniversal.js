import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
import { formatNumber } from "../../utils/formatNumber";

export const MpfUniversal = ({
  sectionKey,
  addLabel,
  removeLabel,
  bgColor,
}) => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const sectionData = filterMPFData(isMPFData, mpfData, sectionKey);

  const handleRemove = (moneyInflow) => {
    const data = {
      sectionName: sectionKey,
      operation: "delete",
    };
    deleteData(data, moneyInflow);
  };

  const handleAdd = () => {
    const data = {
      sectionName: sectionKey,
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (mi) => {
    const operationMapper = {
      sectionName: sectionKey,
      operation: "update",
    };
    updateData(mi, operationMapper);
  };

  const getRowBySection = (row, name) => {
    switch (name) {
      case mpfKey.LIABILITY:
        return [
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
          { header: "Rate Of Interest", value: row.rateOfInterest },
          { header: "Total EMI", value: row.totalMonth },
          { header: "End EMI", value: row.endYear },
        ];
      case "Investment":
        return [
          { header: "Date Of Investment", value: row.year },
          { header: "Invest Amount", value: formatNumber(row.investAmount) },
          { header: "Current Invest", value: formatNumber(row.currentInvest) },
          { header: "Profit", value: formatNumber(row.profit) },
          { header: "Redeem", value: formatNumber(row.investRedeem) },
        ];
      case "Savings(PF+Bank)":
        return [
          { header: "Total Amount", value: formatNumber(row.totalAmount) },
          { header: "Withdrawal", value: formatNumber(row.redeem) },
          { header: "Remain Amount", value: formatNumber(row.remainAmount) },
        ];
      case "Money Outflows":
        return [
          { header: "Date", value: row.outMoneyDate },
          { header: "Amount", value: row.outMoney },
          { header: "Received Amount", value: row.outReceivedMoney },
          { header: "Remain Amount", value: row.outRemain },
        ];
      case "Money Inflows":
        return [
          { header: "Date", value: row.inDate },
          { header: "Amount", value: row.inReceiveAmount },
          { header: "Paid", value: row.inPaidAmount },
          { header: "Remain Amount", value: row.inRemainAmount },
        ];
      case "EarnedMoney":
        return [
          { header: "Date Of Joining", value: row.companyJoinDate },
          { header: "Total CTC", value: formatNumber(row.totalCTC) },
          {
            header: "Monthly Avg Salary",
            value: formatNumber(row.monthSalary),
          },
          { header: "Exist Date", value: row.existDate },
          { header: "Total Earned", value: formatNumber(row.totalEarn) },
        ];
      case "Insurance":
        return [
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
        ];
      case "Vehicles":
        return [
          { header: "Date Of Purchased", value: row.vehiclePurchasedDate },
          { header: "Type", value: row.vehicleType },
          { header: "Owner Name", value: row.vehicleOwnerName },
          { header: "Purchased Value", value: formatNumber(row.vehiclePurchasedValue) },
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
          { header: "Fitness Certficate Valid Upto", value: row.vehicleFitnessValid },
        ];
      default:
        console.warn(`Unknown section: ${name}`);
        return [];
    }
  };

  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: addLabel, remove: removeLabel }}
          data={sectionData}
          addClk={() => {
            handleAdd(sectionData);
          }}
          removeClk={() => {
            handleRemove(sectionData);
          }}
          addSX={{ backgroundColor: bgColor.addBG }}
          removeSX={{ marginLeft: 1, backgroundColor: bgColor.removeBG }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          sectionData.map((data) => {
            return (
              <MPFAccordion
                title={data.sectionName}
                edit={() => handleUpdate(data)}
                key={data?.id}
                isActive={data.isActive}
              >
                <MPFTable data={getRowBySection(data, sectionKey)} />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
