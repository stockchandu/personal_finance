import { useState, useEffect } from "react";
import { styled ,useTheme} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDialogData } from "../../hooks/useSelector";
import { openDialog, saveDialogData } from "../../store/dialog/dialogSlicer";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { MpfButton } from "./Button";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { openLoader } from "../../store/loader/loaderSlicer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CreateData } from "./CreateData";
import {
  liabilityformFields,
  investmentformFields,
  moneyInflowformFields,
  moneyOutflowformFields,
  savingformFields,
  earnedMoneyformFields,
  insuranceformFields,
  vehicleformFields,
} from "../../constant/configForm";
import { UpdateData } from "./UpdateData";
import { DeleteData } from "./DeleteData";
import { apiService } from "../../api/apiService";
import { mpfKey, TOAST_ERROR, TOAST_SUCCESS } from "../../constant/global";
import { btnBgColor } from "../../utils/btnBgColor";
import { hasNonNullValue } from "../../utils/hasNonNullValue";
import { openToast } from "../../store/toast/toastSlicer";
import { isSectionName, updateFormBasedSection } from "../../utils/dialogUtils";

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
  const { isDialog, dialogData, pageSource, deleteData } = useDialogData();
  const [formValue, setFormValue] = useState({});
  const [section, setSection] = useState({});
  const themeResponsive = useTheme();
  const fullScreen = useMediaQuery(themeResponsive.breakpoints.down("sm"));
  const isFormValue = formValue && Object.keys(formValue).length > 0;
  const { sectionName, operation } = pageSource || {};
  const [checkedItems, setCheckedItems] = useState([]);
  const [isBtnDisable, setIsBtnDisable] = useState(true);
  const isCheckedValue = checkedItems && checkedItems.length > 0;
  const isSection = isSectionName(sectionName);

  useEffect(() => {
    if (operation === "create" || operation === "delete") {
      setSection(sectionName);
    } else {
      setSection(dialogData?.section);
    }
  }, [sectionName, dialogData, operation, isDialog]);

  useEffect(() => {
    const isFormNonEmpty = hasNonNullValue(formValue);
    const btnDisable = !(isFormNonEmpty || isCheckedValue);
    setIsBtnDisable(btnDisable);
  }, [formValue, isCheckedValue]);

 
  const createDataDB = async (formData) => {
    const insertData = {
      section: sectionName,
      ...formData,
    };
    try {
      const { error } = await apiService.createMPFData(insertData);
      if (error) {
        dispatch(openToast({ open: true, ...TOAST_ERROR }));
      } else {
        const { data } = await apiService.getMPFData();
        dispatch(saveMpfData(data));
        dispatch(openDialog({ isDialog: false }));
        dispatch(openToast({ open: true, ...TOAST_SUCCESS[operation] }));
        setFormValue({});
      }
    } catch (err) {
      dispatch(openToast({ open: true, ...TOAST_ERROR }));
    } finally {
      dispatch(openLoader(false));
    }
  };

  const updateDataDB = async (sectionUpdateData) => {
    if (isSection && operation === "delete") {
      if (sectionUpdateData.length > 0) {
        const updateData = {
          isActive: false,
        };
        try {
          const { error } = await apiService.updateMPFData(
            updateData,
            sectionUpdateData[0]
          );
          if (error) {
            dispatch(openToast({ open: true, ...TOAST_ERROR }));
          } else {
            const { data } = await apiService.getMPFData();
            dispatch(saveMpfData(data));
            dispatch(openDialog({ isDialog: false }));
            dispatch(openToast({ open: true, ...TOAST_SUCCESS.update }));
            setFormValue({});
            setCheckedItems([]);
          }
        } catch (err) {
          dispatch(openToast({ open: true, ...TOAST_ERROR }));
        } finally {
          dispatch(openLoader(false));
        }
      }
    } else {
      dispatch(saveDialogData({ dialogData }));
      if (sectionUpdateData && Object.keys(sectionUpdateData).length > 0) {
        try {
          const { error } = await apiService.updateMPFData(
            sectionUpdateData,
            dialogData.id
          );
          if (error) {
            dispatch(openToast({ open: true, ...TOAST_ERROR }));
          } else {
            const { data } = await apiService.getMPFData();
            dispatch(saveMpfData(data));
            dispatch(openDialog({ isDialog: false }));
            dispatch(openToast({ open: true, ...TOAST_SUCCESS[operation] }));
            setFormValue({});
          }
        } catch (err) {
          dispatch(openToast({ open: true, ...TOAST_ERROR }));
        } finally {
          dispatch(openLoader(false));
        }
      }
    }
  };

  const deleteDataDB = async (checkedValue) => {
    if (checkedValue && checkedValue.length > 0) {
      try {
        const { error } = await apiService.deleteMPFData(checkedValue);
        if (error) {
          dispatch(openToast({ open: true, ...TOAST_ERROR }));
        } else {
          const { data } = await apiService.getMPFData();
          dispatch(saveMpfData(data));
          dispatch(openDialog({ isDialog: false }));
          dispatch(openToast({ open: true, ...TOAST_SUCCESS[operation] }));
          setFormValue({});
          setCheckedItems([]);
        }
      } catch (err) {
        dispatch(openToast({ open: true, ...TOAST_ERROR }));
      } finally {
        dispatch(openLoader(false));
      }
    }
  };

  const handleEdit = () => {
    dispatch(openLoader(true));
    if (isFormValue || checkedItems) {
      const updateData = Object.fromEntries(
        Object.entries(formValue).map(([key, value]) => [
          key,
          key === "isActive" ? value : parseInt(value),
        ])
      );
      const sectionUpdateData = updateFormBasedSection(dialogData, updateData);
      const OPERATION = {
        create: () => createDataDB(formValue),
        update: () => updateDataDB(sectionUpdateData),
        delete: () => isSection ? updateDataDB(checkedItems) : deleteDataDB(checkedItems),
      };
      OPERATION[operation]();
    }
  };

  const handleClose = () => {
    dispatch(openDialog({ isDialog: false }));
    setFormValue({});
    setCheckedItems([]);
  };

  const getCreateForm = (formdata) => {
    return (
      <CreateData
        formData={formdata}
        setFormValue={setFormValue}
        formValue={formValue}
      />
    );
  };
  const getUpdateForm = (formdata) => {
    return (
      <UpdateData
        formData={formdata}
        setFormValue={setFormValue}
        formValue={formValue}
      />
    );
  };
  const getDeleteForm = (formdata, setChecked, checkedValue) => {
    return (
      <DeleteData
        formData={formdata}
        setFormValue={setFormValue}
        formValue={formValue}
        setCheckedItems={setChecked}
        checkedItems={checkedValue}
      />
    );
  };
  const renderForm = () => {
    const renderSection = (op, form) => {
      switch (op) {
        case "create":
          return getCreateForm(form);
        case "update":
          return getUpdateForm(dialogData);
        case "delete":
          return getDeleteForm(deleteData, setCheckedItems, checkedItems);
        default:
          break;
      }
    };
    const formFieldMapper = {
      [mpfKey?.LIABILITY]: liabilityformFields,
      [mpfKey?.INVESTMENT]: investmentformFields,
      [mpfKey?.MONEYIN]: moneyInflowformFields,
      [mpfKey?.MONEYOUT]: moneyOutflowformFields,
      [mpfKey?.SAVING]: savingformFields,
      [mpfKey?.EARNEDMONEY]: earnedMoneyformFields,
      [mpfKey?.INSURANCE]: insuranceformFields,
      [mpfKey?.VEHICLE]: vehicleformFields,
    };
    if (sectionName && operation) {
      return renderSection(operation, formFieldMapper[sectionName]);
    } else {
      return null;
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isDialog}
        fullScreen={fullScreen}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {section}
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
            {operation !== "delete" && renderForm()}
          </Grid>
          {operation === "delete" && renderForm()}
        </DialogContent>
        <DialogActions>
          <MpfButton
            label={isSection && operation === "delete" ? "Close" : operation}
            sx={{ backgroundColor: btnBgColor(operation) }}
            click={handleEdit}
            disable={isBtnDisable}
          />
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
