import Box from "@mui/material/Box";

const stickyStyle = {
  position: "fixed",
  top: 60,
  width: "74vw",
  zIndex: 1,
  backgroundColor: "#F5F5F5",
  marginLeft: 2,
  padding: "0 !important",
};

export const StickyBox = ({ children }) => {
  return <Box sx={stickyStyle}>{children}</Box>;
};
