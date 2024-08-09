import React from "react";
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
import { formatNumber } from "../../utils/formatNumber";
import { checkData } from "../../utils/checkData";
import { typoStyle } from "./style/home";
import { sortHomeTiles } from "../../constant/global";
import { MpfPieChart } from "../common/PieChart";

export const Home = () => {
  const { mpfData, isMPFData } = useMPFData();
  const navigation = usePush();
  const handleNavigation = (path) => {
    navigation(path);
  };

  const renderSection = (section,mpfData) => {
    switch (section.sectionName) {
      case "Liabilities":
        return Liabilities(
          section,
          typoStyle,
          formatNumber,
          mpfData
        );
      case "Investment":
        return Investment(
          section,
          typoStyle,
          formatNumber,
          mpfData
        );
      case "Savings(PF+Bank)":
        return Saving(
          section,
          typoStyle,
          formatNumber,
          mpfData
        );
      case "Money Outflows":
        return MoneyOutFlow(
          section,
          typoStyle,
          formatNumber,
          mpfData
        );
      case "Money Inflows":
        return MoneyInflow(
          section,
          typoStyle,
          formatNumber,
          mpfData
        );
      default:
        break;
    }
  };

  const sortedSection = checkData(mpfData) && [...mpfData].sort((a, b) => {
    return sortHomeTiles.indexOf(a.sectionName) - sortHomeTiles.indexOf(b.sectionName);
  });

  const netWorthDetailsTile = () => {
    return (
      <>
        <MpfPieChart section={mpfData}/>
        <Grid container spacing={2}>
          {sortedSection.map((section) => {
            if (section.sectionParent)
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={4}
                    key={section.id}
                    onClick={() => {
                      handleNavigation(section?.sectionName);
                    }}
                    sx={{
                      "&:hover": {
                        cursor: "pointer", 
                      },
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 350,
                      }}
                    >
                      {renderSection(section , mpfData)}
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
        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
          Something Went Wrong ! . Please Upload Excel File 
          , Refresh Page
        </Typography>
      </Grid>
    );
  };

  return <>{isMPFData ? netWorthDetailsTile() : uploadError()}</>;
};
