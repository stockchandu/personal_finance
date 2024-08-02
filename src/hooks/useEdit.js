import { useDispatch } from "react-redux";
import { openDialog ,saveDialogData} from "../store/dialog/dialogSlicer";
export const useEdit = () => {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(openDialog({ isDialog: true}));
    dispatch(saveDialogData({ dialogData: data }));
  };
};
