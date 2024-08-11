import { Welcome } from "../home/Welcome";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar } from "../common/AppBar";
import { MpfButton } from "../common/Button";
import { color } from "../../constant/global";

export const MPFAppBar = ({isAuthenticated,handleLogout}) => {
  return (
    <AppBar position="absolute" open={true}>
      <Toolbar
        sx={{
          pr: "24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textTransform: "capitalize" }}
        >
          <Welcome />
        </Typography>
        {/* TODO : uncomment when required */}
        {/* <Upload /> */}
        {isAuthenticated && (
          <MpfButton
            label="Logout"
            disable={false}
            sx={{ backgroundColor: color.RED }}
            click={() => {
              handleLogout();
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};
