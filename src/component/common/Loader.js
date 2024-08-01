import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useLoaderData } from "../../hooks/useSelector";

const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9000,
};

export default function Loader() {
  const { isLoader } = useLoaderData();
  return (
    <>
      {isLoader && (
        <Box sx={loaderStyle}>
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      )}
    </>
  );
}
