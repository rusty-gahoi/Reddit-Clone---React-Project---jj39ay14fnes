import React from "react";

import "./Button.css";

/*import { styled } from '@mui/material/styles';*/

//const CustomButton = styled(Button)({
  // your custom styles go here
//}) as typeof Button 


interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  label: string;
}

export default function Button({ primary, secondary, tertiary, label }: Props) {
  if (tertiary) {
    return <div className="button tertiary-button">{label}</div>;
  } else if (secondary) {
    return <div className="button secondary-button">{label}</div>;
  } else {
    return <div className="button primary-button">{label}</div>;
  }
}