import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useLoaderData } from "../../hooks/useSelector";
import mpf_logo from "../../image/mpf_logo.png"
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
const logoStyle = {
  position: "absolute",
  top: "51%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export default function Loader() {
  const { isLoader } = useLoaderData();
  return (
    <>
      {isLoader && (
        <Box sx={loaderStyle}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={mpf_logo} alt="App Logo" style={logoStyle} width="30" height="30"/>
            <CircularProgress sx={{ color: "white", marginTop: 2 }} />
          </Box>
        </Box>
      )}
    </>
  );
}
