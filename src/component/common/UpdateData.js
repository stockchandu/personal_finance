import { removeFields } from "../../constant/global";
import MPFTextField from "./TextField";
export const UpdateData = ({ formData, setFormValue, formValue }) => {
  return (
    <>
      {formData &&
        Object.entries(formData).map(([key, value]) => {
          if (!removeFields.includes(key)) {
            if (value) {
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
