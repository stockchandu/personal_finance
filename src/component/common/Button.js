import { Button } from "@mui/material"
export const MpfButton =({label,click,sx,color,disable})=>{
    return <Button variant="contained" onClick={click} sx={{...sx}} disabled={disable}>{label}</Button>
}