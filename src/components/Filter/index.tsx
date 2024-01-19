import {
  Stack,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  Slider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { filterOptions } from "../../utils/constants";
import { FilterTypes } from "../../utils/types";

const Filters = () => {
  return (
    <Stack p={2}>
      {filterOptions.map((option) => (
        <Accordion sx={{ marginBottom: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>{option.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {option.type == FilterTypes.LIST &&
              option.subOptions &&
              option.subOptions.map((subOption) => (
                <Typography sx={{ cursor: "pointer" }}>
                  {subOption.value}
                </Typography>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Filters;
