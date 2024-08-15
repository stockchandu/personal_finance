import Snackbar from "@mui/material/Snackbar";
import { useToastData } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";
import { closeToast } from "../../store/toast/toastSlicer";
import Alert from "@mui/material/Alert";

export default function ToastMessage() {
  const toast = useToastData();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeToast({ open: false }));
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={toast?.open}
      autoHideDuration={toast?.duration}
      onClose={handleClose}
    >
      {toast?.open && (
        <Alert
          onClose={handleClose}
          sx={{ backgroundColor: toast?.bgColor, color: "white" }}
          icon={false}
        >
          {toast?.message}
        </Alert>
      )}
    </Snackbar>
  );
}
