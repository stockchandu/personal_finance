import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { formatNumber } from "../../utils/formatNumber";

const MPFTable = ({ tableData, tableHeader ,section}) => {
  const row = tableData;
  const getValueBySection = (row, name) => {
    switch (name) {
      case "Liabilities":
        return [
          { header: "Loan Principal", value: formatNumber(row.loanPrincipal) },
          { header: "EMI", value: formatNumber(row.emi) },
          { header: "Paid Month", value: row.paidMonth },
          { header: "Remain Month", value: row.remainMonth },
          { header: "Total Loan Paid", value: formatNumber(row.totalLoanPaid) },
          { header: "Total Interest", value: formatNumber(row.totalInterest) },
          { header: "Remain Principal", value: formatNumber(row.remainPrincipal) },
          { header: "Rate Of Interest", value: row.rateOfInterest },
          { header: "Total Month", value: row.totalMonth },
          { header: "End Year", value: row.endYear },
        ];
      case "Investment":
        return [
          { header: "Year", value: row.year },
          { header: "Invest Amount", value: formatNumber(row.investAmount) },
          { header: "Current Invest", value: formatNumber(row.currentInvest) },
          { header: "Profit", value: formatNumber(row.profit) },
          { header: "Invest Redeem", value: formatNumber(row.investRedeem) },
        ];
      case "Savings(PF+Bank)":
        return [
          { header: "Total Amount", value: formatNumber(row.totalAmount) },
          { header: "Redeem", value: formatNumber(row.redeem) },
          { header: "Remain Amount", value: formatNumber(row.remainAmount) },
        ];
      case "Money Outflows":
        return [
          { header: "Out Money Date", value: row.outMoneyDate },
          { header: "Out Money", value: row.outMoney },
          { header: "Out Paid Money", value: row.outPaidMoney },
          { header: "Out Remain", value: row.outRemain },
        ];
      case "Money Inflows":
        return [
          { header: "In Date", value: row.inDate },
          { header: "In Receive Amount", value: row.inReceiveAmount },
          { header: "In Paid Amount", value: row.inPaidAmount },
          { header: "In Remain Amount", value: row.inRemainAmount },
        ];
      case "EarnedMoney":
        return [
          { header: "Company Join Date", value: row.companyJoinDate },
          { header: "Total CTC", value: formatNumber(row.totalCTC) },
          { header: "Month Salary", value: formatNumber(row.monthSalary) },
          { header: "Exist Date", value: row.existDate },
          { header: "Total Earn", value: formatNumber(row.totalEarn) },
        ];
      case "Insurance":
        return [
          { header: "Insurance Date", value: row.insuranceDate },
          { header: "Policy Number", value: row.policyNumber },
          { header: "Policy Paid Month", value: row.policyPaidMonth },
        ];
      default:
        console.warn(`Unknown section: ${name}`);
        return [];
    }
  };

  const sectionData = getValueBySection(row, section);

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableBody>
          {sectionData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.header}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MPFTable;
