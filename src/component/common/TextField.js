import  React ,{useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function MPFTextField({ label, value ,formValue,setFormValue}) {
  const [formVal, setFormVal] = useState(value);
  const handleChange = (event) => {
    const {name,value} = event.target
    setFormVal(value);
    setFormValue({[name]:value})
  };

  return (
    <Grid item xs={12} md={4} lg={4}>
      <label>{label}</label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={formVal}
        name={label}
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
