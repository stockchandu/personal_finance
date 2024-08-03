import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const DeleteData = ({ formData }) => {
  console.log("formData: ", formData);

  const typoStyle = {
    fontSize: "15px",
    fontWeight: "500",
  };

  const renderText = (section) => {
    const liabilityDeclare = `I have fully paid the ${section.sectionName} loan amount`;
    const savingDeclare = `I have widthdrawed full amount of ${section.sectionName}`;
    const investDeclare = `I have redeem  full amount of ${section.sectionName} investment fund`;
    const moDeclare = ` ${section.sectionName} taken  ₹${section.outMoney} on ${section.outMoneyDate} and i received all money`;
    const miDeclare = `I have fully paid the ${section.sectionName} amount`;
    const mapperObject = {
      Liabilities: liabilityDeclare,
      "Money Inflows": miDeclare,
      Investment: investDeclare,
      "Savings(PF+Bank)": savingDeclare,
      "Money Outflows": moDeclare,
    };

    if (section?.section) {
      return mapperObject[section?.section];
    } else {
      return "There is something went wrong";
    }
  };
  return (
    <>
      {formData.map((item, index) => (
        <Box>
          <Card variant="outlined" sx={{ marginTop: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Checkbox
                  defaultChecked={item.defaultChecked}
                  disabled={item.disabled}
                />
                <Typography sx={{...typoStyle, marginLeft: 1 }}>
                  {renderText(item)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
};
