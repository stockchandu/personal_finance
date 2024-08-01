import { useSelector } from 'react-redux';
export const useMPFData =()=> useSelector((store)=>store?.mpfData)
export const useDialogData =()=> useSelector((store)=>store?.dialogData)
export const useLoaderData =()=> useSelector((store)=>store?.loaderData)