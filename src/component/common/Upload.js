import { useRef } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Papa from 'papaparse';
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { useDispatch } from "react-redux";

const Input = styled('input')({
  display: 'none',
});

const CustomButton = styled(Button)(() => ({
  backgroundColor: '#2364AD',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
}));

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
      <Input
        accept=".csv"
        id="upload-file"
        type="file"
        onChange={csvUploadFn}
        ref={fileInputRef}
      />
      <label htmlFor="upload-file">
        <CustomButton  component="span">
          <CloudUploadIcon/>
        </CustomButton>
      </label>
    </form>
    </>
  );
};
