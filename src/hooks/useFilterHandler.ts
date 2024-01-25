import React from "react";
import { useAppDispatch, useAppState } from "../context/AppContext";
import { IFilter, ISubOptions } from "../utils/types";
import { IFilters, Types } from "../context/AppReducer";
import { initialState } from "./../context/AppReducer";

const useFilterHandler = () => {
  const dispatch = useAppDispatch();
  const appState = useAppState();
  const updateAppFilter = (option: string, subOption: ISubOptions) => {
    let updatedFilters = appState.filters;
    if (Object.keys(updatedFilters).length > 0) {
      for (let key in updatedFilters) {
        if (updatedFilters[key] == option) {
          updatedFilters[key] = subOption.value;
        } else {
          updatedFilters = { ...updatedFilters, [option]: subOption.value };
        }
      }
    } else {
      updatedFilters = { [option]: subOption.value };
    }
    dispatch({
      type: Types.UpdateFilters,
      payload: {
        ...initialState,
        filters: updatedFilters
      }
    });
  };
  return { updateAppFilter };
};

export default useFilterHandler;
