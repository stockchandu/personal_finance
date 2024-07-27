import { Button } from "@mui/material"


export const ElectryButton =({label,click,bgColor,color})=>{
    return <Button variant="contained" onClick={click}>{label}</Button>
}

