import { useSelector } from 'react-redux';
export const useMPFData =()=> useSelector((store)=>store?.mpfData)