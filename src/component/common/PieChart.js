import { PieChart } from "react-minimal-pie-chart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { calculateNetworth } from "../../utils/calcNetworth";
import { MyNetworth } from "../home/MyNetworth";

const myNetworthParentStyle = {
  p: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  
};
export const MpfPieChart = ({ section }) => {
  const [totalSaving, totalLiabilities] = calculateNetworth(section);
  const total = totalLiabilities + totalSaving;
  const liabilityPercentage = (totalLiabilities / total) * 100;
  const savingsPercentage = (totalSaving / total) * 100;
  return (
    <Grid item xs={12} md={4} lg={4} mb={2}>
      <Paper sx={myNetworthParentStyle} >
        <MyNetworth section={section} />
        <PieChart
          data={[
            {
              title: `Liability (${liabilityPercentage.toFixed(2)}%)`,
              value: totalLiabilities,
              color: "#D12F2E",
            },
            {
              title: `Savings (${savingsPercentage.toFixed(2)}%)`,
              value: totalSaving,
              color: "#6AA84F",
            },
          ]}
          labelStyle={{
            fontSize: "5px",
            fill: "#ffff",
          }}
          label={(props) => `${props.dataEntry.title} `}
          style={{ height: "150px" }}
        />
      </Paper>
    </Grid>
  );
};
