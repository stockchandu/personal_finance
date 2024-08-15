import { MpfButton } from "./Button";
import Box from "@mui/material/Box";

export const AddRemove = ({
  label,
  addClk,
  removeClk,
  addSX,
  removeSX,
}) => {
  return (
    <Box
      sx={{
        marginTop: 2,
      }}
    >
      <MpfButton label={label.add} sx={addSX} click={addClk} />
      <MpfButton label={label.remove} sx={removeSX} click={removeClk} />
    </Box>
  );
};
