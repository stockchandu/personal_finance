import { useDispatch } from "react-redux";
import {
  openDialog,
  saveDialogData,
  pageSource,
  saveDeleteData
} from "../store/dialog/dialogSlicer";
export const useEdit = () => {
  const dispatch = useDispatch();
  return (data, source) => {
    console.log('pageSource: ', source);
    dispatch(openDialog({ isDialog: true }));
    dispatch(saveDialogData({ dialogData: data }));
    dispatch(pageSource({ pageSource: source }));
  };
};

export const useCreate = () => {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(openDialog({ isDialog: true }));
    dispatch(pageSource({ pageSource: data }));
  };
};

export const useDelete = () => {
  const dispatch = useDispatch();
  return (data,deleteData) => {
    dispatch(openDialog({ isDialog: true }));
    dispatch(pageSource({ pageSource: data }));
    dispatch(saveDeleteData({ deleteData: deleteData }));
  };
};
