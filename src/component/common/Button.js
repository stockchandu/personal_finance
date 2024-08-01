import { Button } from "@mui/material"


export const MpfButton =({label,click,sx,color})=>{
    return <Button variant="contained" onClick={click} sx={{...sx}}>{label}</Button>
}

