import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DetailsButton = styled(Button)(({ theme, text }) => ({
    backgroundColor: "#4F81BD",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4F81BD",
    },
    textTransform: "none",
    fontSize: "15px",
    width: "100%",
}));