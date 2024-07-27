import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Papa from 'papaparse';
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";

export const Upload = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const csvUploadFn = (event) => {
      const file = event.target.files[0];
      const fileType = file.name.split('.').pop().toLowerCase();
      if (fileType !== 'csv') {
          return;
      }
      Papa.parse(file, {
          complete: (result) => {
              dispatch(saveMpfData(result.data))
              fileInputRef.current.value = null
          },
          header: true,
      });
  };
  return (
    <>
      <form>
        <TextField type="file" onChange={csvUploadFn} inputRef={fileInputRef}/>
      </form>
    </>
  );
};
