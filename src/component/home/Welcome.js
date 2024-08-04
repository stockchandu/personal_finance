import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useLoginData } from "../../hooks/useSelector";
import { decryptData } from "../../utils/decrypt";
const welcomeStyle = {
  fontSize: "19px",
  fontWeight: "600",
  textTransform: "capitalize",
};
export const Welcome = () => {
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const { userInfo } = useLoginData();
  const decrypt = decryptData(userInfo, secretKey);
  const userName = JSON.parse(decrypt);
  const welcome = `Hi ${userName.name} , Here is your Personal Finance Overview`;
  return (
    // <Grid item xs={12} md={4} lg={4} mb={2}>
      <Typography >{welcome}</Typography>
    // </Grid>
  );
};
