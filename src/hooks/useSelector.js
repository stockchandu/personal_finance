import { useSelector } from 'react-redux';


export const useEstimateFormValue = ()=> useSelector((store)=>store.estimateForm)