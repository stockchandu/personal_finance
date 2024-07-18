import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./billList.css"
export const BillList = ({ billList }) => {
    console.log(billList)
  return (
    <>
    {/* <Grid container> */}


      {billList.map((bill) => {
        return (
          <Grid item xs={12} sx={{borderBottom:"1px solid rgb(226, 223, 223);" , m:1 }}>
          
            <Paper sx={{ fontSize:18 , boxShadow: "none" ,fontWeight:"600"}}>
            Bill Date : {bill["Month"]} {bill["Year"]}
            </Paper>

            <Paper sx={{ display:"flex" ,justifyContent:"space-between" ,fontWeight:"600" ,boxShadow: "none" ,fontSize:12}} >
            <p className="bill__info--card"> Previous Unit: {bill["Previous Units"]}</p>
            <p className="bill__info--card"> Current Unit: {bill["Current Units"]}</p>
            <p className="bill__info--card"> D Charge : {bill["D Charge 4%"]}</p>
            <p className="bill__info--card"> Cust Charge: {bill["Cust Charge"]}</p>
            <p className="bill__info--card"> Meter Rent: {bill["Meter Rent"]}</p>
            <p className="bill__info--card"> Month Bill: {bill["Month Bill"]}</p>
            <p className="bill__info--card"> Previous Adj: {bill["Previous Adj"]}</p>
            {/* <p> Current Unit: {bill["Current Units"]}</p> */}
        
            </Paper>
           
          </Grid>
        );
      })}
      {/* </Grid> */}
    </>
  );
};

