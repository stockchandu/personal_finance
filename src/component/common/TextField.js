import  React ,{useState,useEffect} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function MPFTextField({ label, value ,formValue,setFormValue}) {

  const [formVal, setFormVal] = useState(value);

  // useEffect(() => {
  //   setFormVal(value); // Update local state when value prop changes
  // }, [value]);
  const handleChange = (event) => {
    const {name,value} = event.target
    console.log(name)
    setFormVal(value);
    setFormValue({[name]:value})
    // setFormValue(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }));
  };

  return (
    <Grid item xs={12} md={4} lg={4}>
      <label>{label}</label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={formVal}
        name={label}
        // placeholder={value}
        sx={{
        '& .MuiOutlinedInput-input::placeholder': {
          color: 'black',
          opacity: 1, // To ensure the color is not affected by the opacity
        },
      }}
      onChange={handleChange}
      />
    </Grid>
  );
}
