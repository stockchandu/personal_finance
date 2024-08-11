import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const MPFTable = ({ data }) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell
                style={{ display: "flex", justifyContent: "space-between"}}
              >
                <div>{item.header}</div>
                <div>{item.value}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MPFTable;
