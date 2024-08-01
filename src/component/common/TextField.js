import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function MPFTextField({ label, value, formValue, setFormValue }) {
  const [formVal, setFormVal] = useState(value);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal(value);
    setFormValue({ [name]: value });
  };

  // Determine if the TextField should be disabled
  const disabledFields = ["id", "sectionName", "section", "created_at"];
  const isDisabled = disabledFields.includes(label);

  return (
    <Grid item xs={12} md={4} sm={6}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={formVal}
        name={label}
        fullWidth
        disabled={isDisabled}
        sx={{
          '& .MuiOutlinedInput-input::placeholder': {
            color: 'black',
            opacity: 1,
          },
        }}
        onChange={handleChange}
      />
    </Grid>
  );
}
