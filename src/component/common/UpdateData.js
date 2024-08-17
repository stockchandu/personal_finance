import { removeFields } from "../../constant/global";
import MPFTextField from "./TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
export const UpdateData = ({ formData, setFormValue, formValue }) => {
  const checkNullValue = (key) => {
    const mapperObject = {
      Liabilities: ["partPayment", "isActive"].includes(key),
      "Money Inflows": ["inPaidAmount", "isActive"].includes(key),
      Investment: ["investRedeem", "isActive"].includes(key),
      "Savings(PF+Bank)":
        formData?.sectionName === "PF"
          ? ["redeem", "monthlyPFShare", "isActive"].includes(key)
          : ["redeem", "isActive"].includes(key),
      "Money Outflows": ["outReceivedMoney", "isActive"].includes(key),
      EarnedMoney: ["isActive"].includes(key),
      Vehicles: ["isActive"].includes(key),
    };

    if (mapperObject[formData?.section]) {
      return mapperObject[formData?.section];
    } else {
      return false;
    }
  };
  return (
    <>
      {formData &&
        Object.entries(formData).map(([key, value]) => {
          if (!removeFields.includes(key)) {
            if (value || checkNullValue(key)) {
              if (key === "isActive") {
                return (
                  <Grid item xs={12} md={4} sm={6} key={value}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        value={formValue.isActive ?? value}
                        onChange={(e) =>
                          setFormValue({ ...formValue, [key]: e.target.value })
                        }
                        name="isActive"
                        label="Status"
                      >
                        <MenuItem value>Active</MenuItem>
                        <MenuItem value={false}>Closed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                );
              }
              return (
                <MPFTextField
                  key={key}
                  label={key}
                  value={value}
                  setFormValue={setFormValue}
                  formValue={formValue}
                />
              );
            }
          }
        })}
    </>
  );
};
