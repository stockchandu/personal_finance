import MPFTextField from "./TextField";

export const CreateData = ({formData, setFormValue, formValue}) => {
  return (
    <>
      {formData && formData.map((form) => {
        return (
          <MPFTextField
            key={form.id}
            label={form.label}
            value={form.value}
            setFormValue={setFormValue}
            formValue={formValue}
          />
        );
      })}
    </>
  );
};
