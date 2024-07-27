import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DetailsButton = styled(Button)(({ theme, text }) => ({
    backgroundColor: "#4F81BD",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4F81BD",
    },
    borderRadius: "6px",
    textTransform: "none",
    fontSize: "16px",
    width: "50%",
    margin: "auto",
}));