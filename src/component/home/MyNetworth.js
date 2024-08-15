import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { calculateNetworth } from "../../utils/calcNetworth";
import { formatNumber } from "../../utils/formatNumber";
import { myNetworthParentStyle } from "./style/myNetworthStyle";
export const MyNetworth = ({section}) =>{
    const [totalSaving , totalLiabilities,myNetWorth] = calculateNetworth(section);
    const myNetworthTitle = "My Networth";
    const netWorthFormulaTitle = "Cash in Hand + Savings + Investment - Liabilities";
    const nwColor = () => {
      return totalSaving > totalLiabilities ? "green" : "red";
    };
    return (
        <Paper
          sx={myNetworthParentStyle}
          elevation={0}
        >
          <Typography
            sx={{ fontSize: "20px", fontWeight: "700"}}
          >
            {myNetworthTitle}
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "600" ,color:nwColor()}}
          >
            {formatNumber(myNetWorth)}
          </Typography>
          <Typography
            sx={{ fontSize: "10px", fontWeight: "600"}}
          >
            {netWorthFormulaTitle}
          </Typography>
        </Paper>
    )
}