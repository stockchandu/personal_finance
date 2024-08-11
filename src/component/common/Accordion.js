import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { MpfButton } from "./Button";

export default function MPFAccordion({ children, title, edit, isActive }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "grey.300",
        margin: 2,
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          { title}
          </Typography>

          {isActive ? (
            <Typography
              sx={{
                fontWeight: "600",
                color: "#00D26A",
              }}
            >
              Active
            </Typography>
          ) : (
            <Typography
              sx={{
                fontWeight: "600",
                color: "#F8312F",
              }}
            >
              Closed
            </Typography>
          )}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
        <AccordionDetails sx={{ display: "flex", justifyContent: "end" }}>
          <MpfButton
            label="Edit"
            sx={{ backgroundColor: "#3A87B3" }}
            click={edit}
            disable={false}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
