import { removeFields } from "../../constant/global";
import MPFTextField from "./TextField";
export const UpdateData = ({ formData, setFormValue, formValue }) => {
  const checkNullValue = (key)=>{
    const mapperObject = {
      Liabilities: ["partPayment"].includes(key),
      "Money Inflows": ["inPaidAmount"].includes(key),
      Investment: ["investRedeem"].includes(key),
      "Savings(PF+Bank)": ["redeem"].includes(key),
      "Money Outflows": ["outPaidMoney"].includes(key),
    };

    if(mapperObject[formData?.section]){
      return mapperObject[formData?.section]
    }else{
      return false
    }
  }
  return (
    <>
      {formData &&
        Object.entries(formData).map(([key, value]) => {
          if (!removeFields.includes(key)) {
            if (value || checkNullValue(key)) {
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
