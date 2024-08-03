import React, { useState, useEffect } from "react";
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
import Grid from "@mui/material/Grid";
import { MpfButton } from "./Button";
import { db } from "../../config/db";
import { saveMpfData } from "../../store/mpfData/mpfSlicer";
import { openLoader } from "../../store/loader/loaderSlicer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { CreateData } from "./CreateData";
import {
  liabilityformFields,
  investmentformFields,
  moneyInflowformFields,
  moneyOutflowformFields,
  savingformFields,
} from "../../constant/configForm";
import { UpdateData } from "./UpdateData";
import { DeleteData } from "./DeleteData";


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
  const { isDialog, dialogData, pageSource,deleteData } = useDialogData();
  const [formValue, setFormValue] = useState({});
  const [section, setSection] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isFormValue = formValue && Object.keys(formValue).length > 0;
  const isBtnDisable = isFormValue ? false : true;
  const { sectionName, operation } = pageSource || {};

  const lia = {
    id: 11,
    created_at: "2024-08-01T17:30:39.174335+00:00",
    sectionName: "Aditya",
    paidAmount: null,
    totalAmount: null,
    remainMonth: null,
    remainAmount: null,
    extraAmount: null,
    investAmount: 45998,
    currentInvest: 47213,
    redeem: 0,
    paidMonth: null,
    totalMonth: null,
    profit: 1215,
    year: "19/07/24",
    endYear: null,
    section: "Investment",
    emi: null,
    outMoneyDate: null,
    outMoney: null,
    outPaidMoney: null,
    outRemain: null,
    inMoney: null,
    myPFShare: null,
    companyPFShare: null,
    inReceiveAmount: null,
    inPaidAmount: null,
    inDate: null,
    inRemainAmount: null,
    sectionParent: null,
    loanPrincipal: null,
    remainPrincipal: null,
    totalInterest: null,
    totalLoanPaid: null,
    rateOfInterest: null,
    partPayment: null,
  };

  useEffect(() => {
    if (operation === "create" || operation === "delete") {
      setSection(sectionName);
    } else {
      setSection(dialogData?.section);
    }
  }, [sectionName, dialogData, operation]);

  const updateFormBasedSection = (data, formValue) => {
    switch (data?.section) {
      case "Liabilities":
        if (formValue?.paidMonth) {
          const totalPIncludingInt = data?.emi * data?.totalMonth;
          const totalLoanPaid = data?.emi * formValue?.paidMonth;
          const remainMonth = data?.totalMonth - formValue?.paidMonth;
          const remainPrincipal = totalPIncludingInt - totalLoanPaid;
          return {
            paidMonth: formValue?.paidMonth,
            remainMonth,
            remainPrincipal,
            totalLoanPaid,
          };
        }
        //   TODO :  after talk with bank how part payment works, write the logic
        // else if (formValue?.partPayment) {
        //   const paidAmount = data?.emi * formValue?.paidMonth;
        //   return {};
        // }
        else {
          return formValue;
        }
      case "Investment":
        if (formValue?.investAmount) {
          const prevInvestAmt = formValue?.investAmount - data?.investAmount;
          const newCurrInvest = prevInvestAmt + data?.currentInvest;
          const profit = newCurrInvest - formValue?.investAmount;
          return {
            investAmount: formValue?.investAmount,
            currentInvest: newCurrInvest,
            profit,
          };
        } else if (formValue?.currentInvest) {
          const profit = formValue?.currentInvest - data?.investAmount;
          console.log("data?.investAmount;: ", data?.investAmount);
          return {
            currentInvest: formValue?.currentInvest,
            profit,
          };
        } else if (formValue?.investRedeem) {
          console.log("formValue?.investRedeem: ", formValue?.investRedeem);
          const currentInvest = data?.currentInvest - formValue?.investRedeem;
          return {
            currentInvest,
            investAmount: currentInvest,
            investRedeem: formValue?.investRedeem,
          };
        } else {
          return formValue;
        }

      // TODO : check how to handle both scenario

      // if (formValue?.investRedeem && formValue?.currentInvest) {
      //   const currentInvest = formValue?.currentInvest - formValue?.investRedeem;
      //   return {
      //     currentInvest,
      //     investAmount : currentInvest
      //   };
      // }

      // if(!formValue?.currentInvest || !formValue?.investRedeem){
      //   return formValue;
      // }
      default:
        break;
    }
  };

  const handleEdit = async () => {
    dispatch(saveDialogData({ dialogData: dialogData }));
    // dispatch(openLoader(true));
    console.log("dialogData: ", dialogData);
    if (isFormValue) {
      const updateData = Object.fromEntries(
        Object.entries(formValue).map(([key, value]) => [key, parseInt(value)])
      );

      const sectionUpdateData = updateFormBasedSection(dialogData, updateData);
      console.log("sectionData: ", sectionUpdateData);

      // if (sectionUpdateData && Object.keys(sectionUpdateData).length > 0) {
      //   try {
      //     const tableName = process.env.REACT_APP_PERSONAL_FINANCE_TABLE_NAME;
      //     const { error } = await db
      //       .from(tableName)
      //       .update(sectionUpdateData)
      //       .eq("id", dialogData.id)
      //       .select();
      //     if (error) {
      //       console.error("Error updating data:", error);
      //     } else {
      //       const { data } = await db
      //         .from(tableName)
      //         .select("*")
      //         .order("sectionName", { ascending: true });
      //       dispatch(saveMpfData(data));
      //       dispatch(openDialog({ isDialog: false }));
      //       setFormValue({});
      //     }
      //   } catch (err) {
      //     console.error("Unexpected error:", err);
      //   } finally {
      //     dispatch(openLoader(false));
      //   }
      // }
    }
  };

  const handleClose = () => {
    dispatch(openDialog({ isDialog: false }));
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
  const getDeleteForm = (formdata) => {
    return (
      <DeleteData
        formData={formdata}
        setFormValue={setFormValue}
        formValue={formValue}
      />
    );
  };
  const renderForm = (pageSource) => {
    const { sectionName, operation } = pageSource || {};
    const mapperObject = {
      Liabilities: {
        create: getCreateForm(liabilityformFields),
        update: getUpdateForm(dialogData),
        delete: getDeleteForm(deleteData),
      },
      Investment: {
        create: getCreateForm(investmentformFields),
        update: getUpdateForm(dialogData),
        delete: getDeleteForm(deleteData),
      },
      MoneyInflow: {
        create: getCreateForm(moneyInflowformFields),
        update: getUpdateForm(dialogData),
        delete: getDeleteForm(deleteData),
      },
      MoneyOutflow: {
        create: getCreateForm(moneyOutflowformFields),
        update: getUpdateForm(dialogData),
        delete: getDeleteForm(deleteData),
      },
      Savings: {
        create: getCreateForm(savingformFields),
        update: getUpdateForm(dialogData),
        delete: getDeleteForm(deleteData),
      },
    };

    if (sectionName && operation) {
      return mapperObject[sectionName][operation];
    } else {
      return null;
    }
  };

  const btnBgColor = (operation) => {
    switch (operation) {
      case "create":
        return "#6AA84F";
      case "update":
        return "#3A87B3";
      case "delete":
        return "#D12F2E";
      default:
        break;
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
            {/* {dialogData &&
                Object.entries(dialogData).map(([key, value]) => {
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
                  return null;
                })} */}

            { operation !=="delete" && renderForm(pageSource)}
          </Grid>
          { operation ==="delete" && renderForm(pageSource)}
        </DialogContent>
        <DialogActions>
          <MpfButton
            label={operation}
            sx={{ backgroundColor: btnBgColor(operation) }}
            click={handleEdit}
            // disable={isBtnDisable}
          />
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
