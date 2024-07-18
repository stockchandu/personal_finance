import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { ElectryButton } from "../common/Button";
import { useDispatch } from 'react-redux';
import { saveFormFromUnits } from "../../store/billEstimateForm/estimateFormSlice";
import { useEstimateFormValue } from "../../hooks/useSelector";

const BillEstimateField = () => {
  const dispatch = useDispatch();
  const form  = useEstimateFormValue();

  const handleEstimate = () => {
   console.log(form)
  };

  const handleChange = (event) => {
    const {name,value} = event.target;
    dispatch(saveFormFromUnits({name,value}))
  };
  return (
    <Box>
      <TextField
        variant="outlined"
        name = "fromUnits"
        onChange={handleChange}
        value={form.fromUnits} 
      />
      <TextField
        variant="outlined"
        name = "toUnits"
        onChange={handleChange}
        value={form.toUnits} 
      />

      <ElectryButton label="Estimate" click={handleEstimate} />
    </Box>
  );
};

export default BillEstimateField;
