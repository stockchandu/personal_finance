import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { disabledFields } from "../../constant/global";
import { useDialogData } from "../../hooks/useSelector";
export default function MPFTextField({
  label,
  value,
  formValue,
  setFormValue,
}) {
  const { pageSource } = useDialogData();
  const [formVal, setFormVal] = useState(value);
  const { operation } = pageSource || {};
  const handleChange = (event) => {
    const { name, value:changeValue } = event.target;
    setFormVal(changeValue);
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: changeValue }));
  };

  const fields =
    label === "existDate" && value !== "continue"
      ? [...disabledFields, "existDate"]
      : disabledFields;
  const isDisabled = operation !== "create" && fields.includes(label);
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
        onChange={handleChange}
      />
    </Grid>
  );
}
