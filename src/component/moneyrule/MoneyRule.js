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
  display: "flex",
  alignItems: "flex-start", 
  paddingLeft: 0,
  marginLeft: 2,
}

const listBoxStyle = {
  width: "8px", 
  height: "8px", 
  borderRadius: "50%", 
  backgroundColor: "black", 
  marginRight: "8px",
  marginTop: "6px", 
}
export const MoneyRule = () => {
  return (
    <>
      <StickyBox>
        <h2> Money Rules</h2>
      </StickyBox>
      <Box sx={boxStyle}>
        {moneyRules?.map((rule) => {
          return (
            <Box sx={{ marginTop: 1, p: 1 }} key={rule.title}>
              <Typography sx={typoStyle} key={rule.id}>
                {rule?.id} : {rule?.title}
              </Typography>
              {Object.keys(rule?.description).map((key) => {
                return (
                  <ListItem
                    key={key}
                    sx={listStyle}
                  >
                    <Box
                      sx={listBoxStyle}
                    />
                    <Box
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      {rule?.description[key]}
                    </Box>
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
