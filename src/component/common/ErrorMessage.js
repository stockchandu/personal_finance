import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export const ErrorMessage = () => {
    return (
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 290,
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
          Something Went Wrong , Please refresh page
        </Typography>
      </Grid>
    );
  };