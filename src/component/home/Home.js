import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { usePush } from "../../hooks/usePush";
import { useMPFData } from "../../hooks/useSelector";
import { Liabilities } from "./Liabilities";
import { Investment } from "./Investment";
import { Saving } from "./Saving";
import { MoneyOutFlow } from "./MoneyOutFlow";
import { MoneyInflow } from "./MoneyInFlow";
import { Typography } from "@mui/material";
import { MyNetworth } from "./MyNetworth";
import ArticleIcon from '@mui/icons-material/Article';
import { formatNumber } from "../../utils/formatNumber";

export const Home = () => {
  const { mpfData, isMPFData } = useMPFData();
  const navigation = usePush();
  const [section, setSection] = useState(mpfData);

  useEffect(() => {
    setSection(mpfData);
  }, [mpfData]);

  const typoStyle = {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: 1,
  };

  const handleNavigation = (path) => {
    navigation(path);
  };

  const renderSection = (section) => {
    switch (section.sectionName) {
      case "Liabilities":
        return Liabilities(section, typoStyle, formatNumber, handleNavigation);
      case "Investment":
        return Investment(section, typoStyle, formatNumber, handleNavigation);
      case "Savings(PF+Bank)":
        return Saving(section, typoStyle, formatNumber, handleNavigation);
      case "Money Outflows":
        return MoneyOutFlow(section, typoStyle, formatNumber, handleNavigation);
      case "Money Inflows":
        return MoneyInflow(section, typoStyle, formatNumber, handleNavigation);
      default:
        break;
    }
  };

  const netWorthDetailsTile = () => {
    return (
      <>
        <MyNetworth section={section} />
        <Grid container spacing={3}>
          {section.map((section, index) => {
            if (index < 5)
              return (
                <>
                  <Grid item xs={12} md={4} lg={4} key={section.id}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 290,
                      }}
                    >
                      {renderSection(section)}
                    </Paper>
                  </Grid>
                </>
              );
          })}
        </Grid>
      </>
    );
  };

  const uploadError = () => {
    return (
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 290,
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "500"}}
        >
          Please UPLOAD Excel File For Updated Data <ArticleIcon/>
        </Typography>
      </Grid>
    );
  };

  return <>{isMPFData ? netWorthDetailsTile() : uploadError()}</>;
};
