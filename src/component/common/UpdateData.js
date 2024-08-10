import { removeFields } from "../../constant/global";
import MPFTextField from "./TextField";
export const UpdateData = ({ formData, setFormValue, formValue }) => {
  const checkNullValue = (key) => {
    const mapperObject = {
      Liabilities: ["partPayment", "isActive"].includes(key),
      "Money Inflows": ["inPaidAmount", "isActive"].includes(key),
      Investment: ["investRedeem", "isActive"].includes(key),
      "Savings(PF+Bank)":
        formData?.sectionName === "PF"
          ? ["redeem", "monthlyPFShare", "isActive"].includes(key)
          : ["redeem"].includes(key),
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
