import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, Button, IconButton
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';

const MPFTable = (tableData) => {
    console.log(tableData)
    const row = tableData
  const [rows, setRows] = useState([
    { 
        id: 1, 
        totalAmount : 750000,
        paidAmount : 230916,
        remainMonth : 46,
        remainAmount : 519084,
        extraAmount : 239640,
        paidMonth : 14,
        totalMonth : 60,
        endYear : "May 2028",
        emi : 16494
     },
  ]);

  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setFormData(row);
  };

  const handleSaveClick = (id) => {
    const updatedRows = rows.map(row => (row.id === id ? formData : row));
    setRows(updatedRows);
    setEditRowId(null);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat("en-IN");
    return formatter.format(parseInt(number));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          {/* <TableCell>ID</TableCell> */}
            <TableCell>Loan amount</TableCell>
            <TableCell>EMI</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Extra amount</TableCell>
            <TableCell>Total tenure</TableCell>
            <TableCell>Completed tenure</TableCell>
            <TableCell>Remaining tenure</TableCell>
            <TableCell>End tenure date</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <TableRow key={row.id}>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                  />
                ) : (
                    formatNumber(row.totalAmount)
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                   name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                    style={{ margin: 0, padding: 0 }}
                    InputProps={{ style: { height: 40 } }}
                  />
                ) : (
                    formatNumber(row.emi)
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    formatNumber(row.paidAmount)
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    formatNumber(row.extraAmount)
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    row.totalMonth
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    row.paidMonth
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    row.remainMonth
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                ) : (
                    row.endYear
                )}
              </TableCell>
              <TableCell>
                {editRowId === row.id ? (
                  <IconButton onClick={() => handleSaveClick(row.id)}>
                    <Save />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEditClick(row)}>
                    <Edit />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MPFTable;
