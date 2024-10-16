import { Button } from "@mui/material";
export const MpfButton = ({ label, click, sx, disable }) => {
  return (
    <Button
      variant="contained"
      onClick={click}
      sx={{
        ...sx,
        "&:hover": {
          backgroundColor: sx?.backgroundColor,
        },
      }}
      disabled={disable}
    >
      {label}
    </Button>
  );
};
