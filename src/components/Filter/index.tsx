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
import { FilterTypes, ISubOptions } from "../../utils/types";
import useFilterHandler from "../../hooks/useFilterHandler";
import { useAppState } from "../../context/AppContext";

const Filters = () => {
  const { updateAppFilter } = useFilterHandler();
  const appState = useAppState();
  const onFilterSelect = (option: string, subOption: ISubOptions) => {
    updateAppFilter(option, subOption);
  };
  const getColor = (option: string, subOption: string) => {
    if (appState.filters[option] == subOption) {
      return "green";
    } else {
      return "black";
    }
  };
  return (
    <Stack p={2}>
      {filterOptions.map((option, idx) => (
        <Accordion sx={{ marginBottom: "10px" }} key={idx}>
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
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: getColor(option.key, subOption.value)
                  }}
                  key={subOption.key}
                  onClick={() => onFilterSelect(option.key, subOption)}
                >
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
