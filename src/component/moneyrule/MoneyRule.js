import { moneyRules } from "../../constant/moneyRulesData";
import Box from "@mui/material/Box";
import { StickyBox } from "../common/StickyBox";
import Typography from "@mui/material/Typography";

export const MoneyRule = () => {
  const typoStyle = {
    fontSize: "17px",
    fontWeight: "700",
    marginTop: 3,
  };
  return (
    <>
      <StickyBox>
        <h2> Money Rules</h2>
      </StickyBox>
      <Box sx={{ marginTop: 9, marginLeft: 2 }}>
        {moneyRules.map((rule) => {
          return (
            <>
              <Typography sx={typoStyle} key={rule.id}>
                Rule No {rule?.id} : {rule?.title}
              </Typography>
              <Typography
                sx={{ border: "0.5px solid #1B263B", marginTop: 1 }}
                p={1}
              >
                {rule?.description}
              </Typography>
            </>
          );
        })}
      </Box>
    </>
  );
};
