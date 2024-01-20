import React from "react";
import { Button, ButtonProps, Typography, styled } from "@mui/material";
import { appColors } from "../../utils/constants";

interface IButtonProps {
  type: string;
  label: string;
  onClick?: () => void;
}
export enum IButtonTypes {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TEXT = "TEXT"
}

const ColorContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  textTransform: "none",
  backgroundColor: appColors.primaryColor,
  "&:hover": {
    backgroundColor: appColors.primaryColor
  }
}));

const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: appColors.primaryColor,
  borderColor: appColors.primaryColor,
  backgroundColor: "white",
  textTransform: "none",
  "&:hover": {
    color: appColors.primaryColor,
    borderColor: appColors.primaryColor,
    backgroundColor: "white"
  }
}));
const ColorTextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "none"
}));
const Buttons: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { type, label, onClick } = props;
  return (
    <>
      {type == IButtonTypes.PRIMARY && (
        <ColorContainedButton variant="contained" onClick={onClick}>
          {label}
        </ColorContainedButton>
      )}
      {type == IButtonTypes.SECONDARY && (
        <ColorOutlinedButton variant="outlined" onClick={onClick}>
          {label}
        </ColorOutlinedButton>
      )}
      {type === IButtonTypes.TEXT && (
        <ColorTextButton
          onClick={onClick}
          variant="text"
          sx={{ color: appColors.primaryColor }}
        >
          <Typography ml={1} mr={1}>
            {label}
          </Typography>
        </ColorTextButton>
      )}
    </>
  );
};

export default Buttons;
