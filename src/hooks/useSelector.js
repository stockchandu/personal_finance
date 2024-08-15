import { useSelector } from "react-redux";
export const useMPFData = () => useSelector((store) => store?.mpfData);
export const useDialogData = () => useSelector((store) => store?.dialogData);
export const useLoaderData = () => useSelector((store) => store?.loaderData);
export const useLoginData = () => useSelector((store) => store?.loginData);
export const useToastData = () => useSelector((store) => store?.toastData);
