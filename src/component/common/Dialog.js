import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDialogData } from "../../hooks/useSelector";
import { openDialog, saveDialogData } from "../../store/dialog/dialogSlicer";
import { useDispatch } from "react-redux";
import MPFTextField from "./TextField";
import Grid from "@mui/material/Grid";
import { MpfButton } from "./Button";
import { db } from "../../config/db";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { openLoader } from "../../store/loader/loaderSlicer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function MPFDialog() {
  const dispatch = useDispatch();
  const { isDialog, dialogData } = useDialogData();
  const [formValue, setFormValue] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isFormValue = formValue && Object.keys(formValue).length > 0 
  const isBtnDisable = isFormValue ? false : true
  const handleEdit = async () => {
    dispatch(saveDialogData({ dialogData: dialogData }));
    dispatch(openLoader(true));
    if (isFormValue) {
      const updateData = Object.fromEntries(
        Object.entries(formValue).map(([key, value]) => [key, parseInt(value)])
      );

      if (updateData && Object.keys(updateData).length > 0) {
        try {
          const tableName = process.env.REACT_APP_PERSONAL_FINANCE_TABLE_NAME;
          const { error } = await db
            .from(tableName)
            .update(updateData)
            .eq("id", dialogData.id)
            .select();
          if (error) {
            console.error("Error updating data:", error);
          } else {
            const { data } = await db
              .from(tableName)
              .select("*")
              .order("sectionName", { ascending: true });
            dispatch(saveMpfData(data));
            dispatch(openDialog({ isDialog: false }));
          }
        } catch (err) {
          console.error("Unexpected error:", err);
        } finally {
          dispatch(openLoader(false));
        }
      }
    }
  };

  const handleClose = () => {
    dispatch(openDialog({ isDialog: false }));
  };

  return (
    <>
      {dialogData && Object.keys(dialogData).length > 0 && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={isDialog}
          fullScreen={fullScreen}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {dialogData?.section}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2}>
              {dialogData &&
                Object.entries(dialogData).map(([key, value]) => {
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
                  return null;
                })}
            </Grid>
          </DialogContent>
          <DialogActions>
            <MpfButton
              label="Update"
              sx={{ backgroundColor: "#3A87B3" }}
              click={handleEdit}
              disable={isBtnDisable}
            />
          </DialogActions>
        </BootstrapDialog>
      )}
    </>
  );
}
