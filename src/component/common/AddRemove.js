import { MpfButton } from "./Button";
import Box from "@mui/material/Box";

export const AddRemove = ({ label, data, addClk,removeClk,addSX,removeSX }) => {
  console.log("label: ", data);
  return (
    <Box
      sx={{
        margin: 2,
        borderRadius: 1,
      }}
    >
      <MpfButton
        label={label.add}
        sx={addSX}
        click={addClk}
      />
      <MpfButton
        label={label.remove}
        sx={removeSX}
        click={removeClk}
      />
    </Box>
  );
};
