import React from "react";
import { Button, ButtonProps, Typography, styled } from "@mui/material";

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
  backgroundColor: "#15C421",
  "&:hover": {
    backgroundColor: "#15C421"
  }
}));

const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#15C421",
  borderColor: "#15C421",
  backgroundColor: "white",
  textTransform: "none",
  "&:hover": {
    color: "#15C421",
    borderColor: "#15C421",
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
        <ColorOutlinedButton variant="contained" onClick={onClick}>
          {label}
        </ColorOutlinedButton>
      )}
      {type === IButtonTypes.TEXT && (
        <ColorTextButton
          onClick={onClick}
          variant="text"
          sx={{ color: "#15C421" }}
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
