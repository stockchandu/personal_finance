import { useDispatch } from "react-redux";
import { openDialog } from "../store/dialog/dialogSlicer";

export const useEdit = () => {
  const dispatch = useDispatch();
  return (investment) => {
    dispatch(openDialog({ isDialog: true, dialogData: investment }));
  };
};
