import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../store/login/loginSlicer";
import { useDispatch } from "react-redux";
import { db } from "../../config/db";
import { openLoader } from "../../store/loader/loaderSlicer";
import { useNavigate } from "react-router-dom";
import { encryptData } from "../../utils/encrypt";

const defaultTheme = createTheme();
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMasterErr, setIsMasterErr] = useState(false);

  const getMasterKey = async (masterKey) => {
    try {
      const tableName = process.env.REACT_APP_MASTERKEY_TABLE_NAME;
      const secretKey = process.env.REACT_APP_SECRET_KEY
      const { data: masterKeyData, error: masterKeyError } = await db
        .from(tableName)
        .select("*")
        .eq(tableName, masterKey)
        .single();

      if (masterKeyData && Object.keys(masterKeyData).length > 0) {
        const encryptValue = encryptData(JSON.stringify(masterKeyData) , secretKey)
        dispatch(login({ isAuthenticated: true, userInfo: encryptValue }));
        dispatch(openLoader(false));
        navigate("/");
      }

      if (masterKeyError && Object.keys(masterKeyError).length > 0) {
        setIsMasterErr(true);
        dispatch(openLoader(false));
      }
    } catch (error) {
      console.error("Error:", error.message);
      return { error: "Unexpected error occurred" };
    } finally {
      dispatch(openLoader(false));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const masterKey = data.get("masterkey");
    dispatch(openLoader(true));
    getMasterKey(masterKey);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please enter the MPF master key
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="masterkey"
              label="master key"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button type="submit" fullWidth variant="contained">
              SUBMIT
            </Button>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remind me"
            />
            {isMasterErr && (
              <Typography component="h1" variant="h5" sx={{ color: "red" }}>
                Please enter valid master key
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
