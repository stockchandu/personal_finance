import { moneyRules } from "../../constant/moneyRulesData";
import Box from "@mui/material/Box";
import { StickyBox } from "../common/StickyBox";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
const typoStyle = {
  fontSize: "17px",
  fontWeight: "700",
};

const boxStyle = {
  marginTop: 9,
  marginLeft: 2,
};

const listStyle = {
  listStyleType: "disc",
  display: "list-item",
  fontWeight: "400",
};
export const MoneyRule = () => {
  return (
    <>
      <StickyBox>
        <h2> Money Rules</h2>
      </StickyBox>
      <Box sx={boxStyle}>
        {moneyRules?.map((rule) => {
          return (
            <Box sx={{ marginTop: 1, p: 1 }}>
              <Typography sx={typoStyle} key={rule.id}>
                {rule?.id} : {rule?.title}
              </Typography>
              {Object.keys(rule?.description).map((key) => {
                return (
                  <ListItem key={key} sx={listStyle}>
                    {rule?.description[key]}
                  </ListItem>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
