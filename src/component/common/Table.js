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
        return (
          <>
            <TableCell>{formatNumber(row.loanPrincipal)}</TableCell>
            <TableCell>{formatNumber(row.emi)}</TableCell>
            <TableCell>{formatNumber(row.totalLoanPaid)}</TableCell>
            <TableCell>{formatNumber(row.totalInterest)}</TableCell>
            <TableCell>{formatNumber(row.remainPrincipal)}</TableCell>
            <TableCell>{row.rateOfInterest}</TableCell>
            <TableCell>{row.totalMonth}</TableCell>
            <TableCell>{row.paidMonth}</TableCell>
            <TableCell>{row.remainMonth}</TableCell>
            <TableCell>{row.endYear}</TableCell>
          </>
        );
      case "Investment":
        return (
          <>
            <TableCell>{row.year}</TableCell>
            <TableCell>{formatNumber(row.investAmount)}</TableCell>
            <TableCell>{formatNumber(row.currentInvest)}</TableCell>
            <TableCell>{formatNumber(row.profit)}</TableCell>
            <TableCell>{formatNumber(row.investRedeem)}</TableCell>
          </>
        );
      case "Savings(PF+Bank)":
        return (
          <>
            <TableCell>{formatNumber(row.totalAmount)}</TableCell>
            <TableCell>{formatNumber(row.redeem)}</TableCell>
            <TableCell>{formatNumber(row.remainAmount)}</TableCell>
          </>
        );
      case "Money Outflows":
        return (
          <>
            <TableCell>{row.outMoneyDate}</TableCell>
            <TableCell>{row.outMoney}</TableCell>
            <TableCell>{row.outPaidMoney}</TableCell>
            <TableCell>{row.outRemain}</TableCell>
          </>
        );
      case "Money Inflows":
        return (
          <>
            <TableCell>{row.inDate}</TableCell>
            <TableCell>{row.inReceiveAmount}</TableCell>
            <TableCell>{row.inPaidAmount}</TableCell>
            <TableCell>{row.inRemainAmount}</TableCell>
          </>
        );
      default:
        console.warn(`Unknown`);
        break;
    }
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeader &&
              tableHeader.map((header) => {
                return <TableCell key={header.id}>{header.name}</TableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={row.id}>
            {getValueBySection(row,section)}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MPFTable;
