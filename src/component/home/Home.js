import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { apiConfig } from "../../api/axios";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePush } from "../../hooks/usePush";
import { data } from "../../constant/apiMockData";
import { useMPFData } from "../../hooks/useSelector";

const StyledButton = styled(Button)(({ theme, text }) => ({
  backgroundColor: "#4F81BD",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#4F81BD",
  },
  borderRadius: "6px",
  textTransform: "none",
  fontSize: "16px",
  width: "50%",
  margin: "auto",
}));
const initialData = [
  {
    id: "1",
    sectionName: "Liabilities",
    paidAmount: "530881",
    totalAmount: "2070000",
    remainMonth: "180",
    remainAmount: "1539119",
    extraAmount: "",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "48",
    totalMonth: "228",
    profit: "",
    year: "2024",
    endYear: "",
    section: "",
    emi: "",
  },
  {
    id: "2",
    sectionName: "Investment",
    paidAmount: "",
    totalAmount: "",
    remainMonth: "",
    remainAmount: "",
    extraAmount: "",
    investAmount: "100980",
    currentInvestAmount: "",
    paidMonth: "",
    totalMonth: "",
    profit: "",
    year: "2024",
    endYear: "",
    section: "",
    emi: "",
  },
  {
    id: "3",
    sectionName: "Savings",
    paidAmount: "",
    totalAmount: "0",
    remainMonth: "",
    remainAmount: "",
    extraAmount: "",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "",
    totalMonth: "",
    profit: "",
    year: "2024",
    endYear: "",
    section: "",
    emi: "",
  },
  {
    id: "4",
    sectionName: "Money Outflows",
    paidAmount: "",
    totalAmount: "83500",
    remainMonth: "",
    remainAmount: "",
    extraAmount: "",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "",
    totalMonth: "",
    profit: "",
    year: "2024",
    endYear: "",
    section: "",
    emi: "",
  },
  {
    id: "5",
    sectionName: "Money Inflows",
    paidAmount: "",
    totalAmount: "8000",
    remainMonth: "",
    remainAmount: "",
    extraAmount: "",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "",
    totalMonth: "",
    profit: "",
    year: "2024",
    endYear: "",
    section: "",
    emi: "",
  },
  {
    id: "6",
    sectionName: "Hdfc",
    paidAmount: "230916",
    totalAmount: "750000",
    remainMonth: "46",
    remainAmount: "519084",
    extraAmount: "239640",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "14",
    totalMonth: "60",
    profit: "",
    year: "",
    endYear: "May 2028",
    section: "Liabilities",
    emi: "16494",
  },
  {
    id: "7",
    sectionName: "Icici",
    paidAmount: "67140",
    totalAmount: "150000",
    remainMonth: "40",
    remainAmount: "82860",
    extraAmount: "51420",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "20",
    totalMonth: "60",
    profit: "",
    year: "",
    endYear: "Nov 2027",
    section: "Liabilities",
    emi: "3357",
  },
  {
    id: "8",
    sectionName: "Navi",
    paidAmount: "125600",
    totalAmount: "420000",
    remainMonth: "40",
    remainAmount: "294400",
    extraAmount: "33600",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "8",
    totalMonth: "48",
    profit: "",
    year: "",
    endYear: "Oct 2027",
    section: "Liabilities",
    emi: "15700",
  },
  {
    id: "9",
    sectionName: "Hdfc jumbo",
    paidAmount: "107225",
    totalAmount: "750000",
    remainMonth: "54",
    remainAmount: "642775",
    extraAmount: "295200",
    investAmount: "",
    currentInvestAmount: "",
    paidMonth: "6",
    totalMonth: "60",
    profit: "",
    year: "",
    endYear: "Dec 2028",
    section: "Liabilities",
    emi: "17420",
  },
];
export const Home = () => {
  const { mpfData, isMPFData } = useMPFData();
  console.log("mpfData", mpfData);
  const navigation = usePush();
  const [section, setSection] = useState(mpfData);

  useEffect(() => {
    // const fetchList = async () => {
    //   const res = await apiConfig.get("eej92wocxjchy");
    //   setSection(res.data);
    // };
    // // fetchList();
    setSection(mpfData);
  }, [mpfData]);

  const typoStyle = {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: 1,
  };

  const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat("en-IN");
    return formatter.format(parseInt(number));
  };

  const handleNavigation = (path) => {
    navigation(path);
  };

  const renderLiability = (section) => {
    return (
      <>
        <Typography sx={{ height: 260 }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
          >
            {section?.sectionName}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Paid : {formatNumber(section?.paidAmount)}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Amount : {formatNumber(section?.totalAmount)} lac
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Remain Amount : {formatNumber(section?.remainAmount)} lac
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Months : {section?.totalMonth}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Remain Months : {section?.remainMonth}
          </Typography>
        </Typography>

        <StyledButton
          text="Check Details"
          onClick={() => handleNavigation("Liabilities")}
        >
          Check Details
        </StyledButton>
      </>
    );
  };

  const renderInvestment = (section) => {
    return (
      <>
        <Typography sx={{ height: 260 }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
          >
            {section?.sectionName}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Invest : {formatNumber(section?.investAmount)}
          </Typography>
        </Typography>
        <StyledButton
          text="Check Details"
          onClick={() => handleNavigation("Investments")}
        >
          Check Details
        </StyledButton>
      </>
    );
  };

  const renderSavings = (section) => {
    return (
      <>
        <Typography sx={{ height: 260 }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
          >
            {section?.sectionName}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Amount : {formatNumber(section?.totalAmount)}
          </Typography>
        </Typography>

        <StyledButton
          text="Check Details"
          onClick={() => handleNavigation("Saving(PF+Bank)")}
        >
          Check Details
        </StyledButton>
      </>
    );
  };

  const renderMoneyInflow = (section) => {
    return (
      <>
        <Typography sx={{ height: 260 }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
          >
            {section?.sectionName}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Amount : {formatNumber(section?.totalAmount)}
          </Typography>
        </Typography>

        <StyledButton
          text="Check Details"
          onClick={() => handleNavigation("Money Inflows")}
        >
          Check Details
        </StyledButton>
      </>
    );
  };

  const renderMoneyOutFlow = (section) => {
    return (
      <>
        <Typography sx={{ height: 260 }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", marginBottom: 1 }}
          >
            {section?.sectionName}
          </Typography>
          <Typography sx={typoStyle}>
            {" "}
            Total Amount : {formatNumber(section?.totalAmount)}
          </Typography>
        </Typography>

        <StyledButton
          text="Check Details"
          onClick={() => handleNavigation("Money OutFlow")}
        >
          Check Details
        </StyledButton>
      </>
    );
  };

  const renderSection = (section) => {
    switch (section.sectionName) {
      case "Liabilities":
        return renderLiability(section);
      case "Investment":
        return renderInvestment(section);
      case "Savings":
        return renderSavings(section);
      case "Money Outflows":
        return renderMoneyOutFlow(section);
      case "Money Inflows":
        return renderMoneyInflow(section);
      default:
        break;
    }
  };
  return (
    <Grid container spacing={3}>
      {isMPFData ? (
        section.map((section, index) => {
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
        })
      ) : (
        <h1>No Data found</h1>
      )}
        {/* TODO : create a no data found components */}
    </Grid>
  );
};
