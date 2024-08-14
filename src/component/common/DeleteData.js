import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { formatNumber } from "../../utils/formatNumber";

export const DeleteData = ({ formData, setCheckedItems, checkedItems }) => {
  const typoStyle = {
    fontSize: "15px",
    fontWeight: "500",
  };
  const renderText = (section) => {
    const liabilityDeclare = `I have fully paid the ${section.sectionName} loan amount`;
    const savingDeclare = `I have widthdrawed full amount of ${section.sectionName}`;
    const investDeclare = `I have redeem  full amount of ${section.sectionName} investment fund`;
    const moDeclare = ` ${section.sectionName} taken  ${formatNumber(section.outMoney)} on ${section.outMoneyDate} and i received all money`;
    const miDeclare = `I have fully paid the ${formatNumber(section.inReceiveAmount)} amount to ${section.sectionName}`;
    const earnedMoneyDeclare = `I left the ${section.sectionName} company`;
    const vehicleDeclare = `I sold/transferred the ${section.sectionName} ${section.vehicleType}`;
    const insuranceDeclare = `The entire premium for ${section.sectionName} paid successfully and maturity amount ₹${section.policyMaturityAmount} received`;
    const mapperObject = {
      Liabilities: liabilityDeclare,
      "Money Inflows": miDeclare,
      Investment: investDeclare,
      "Savings(PF+Bank)": savingDeclare,
      "Money Outflows": moDeclare,
      Insurance: insuranceDeclare,
      EarnedMoney: earnedMoneyDeclare,
      Vehicles: vehicleDeclare,
    };
    if (section?.section) {
      return mapperObject[section?.section];
    } else {
      return "There is something went wrong";
    }
  };
  const handleCheckboxChange = (event, itemId) => {
    if (event.target.checked) {
      setCheckedItems((prev) => [...prev, itemId]);
    } else {
      setCheckedItems((prev) => prev.filter((id) => id !== itemId));
    }
  };
  return (
    <>
      {formData?.map((item, index) => (
        <Box key={item.id}>
          <Card variant="outlined" sx={{ marginTop: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                {item.isActive ? (
                  <Checkbox
                    checked={checkedItems.includes(item.id)}
                    onChange={(event) => handleCheckboxChange(event, item.id)}
                    disabled={item.isActive ? false : true}
                  />
                ) : (
                  <Checkbox
                    checked={true}
                    disabled={item.isActive ? false : true}
                  />
                )}
                <Typography sx={{ ...typoStyle, marginLeft: 1 }}>
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
