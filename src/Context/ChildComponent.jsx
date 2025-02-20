
import React from "react";
import { useThemeContext } from "./ThemeContext";
import { Typography } from "@mui/material";

function ChildComponent() {
  const { mode } = useThemeContext();
  return (
    <Typography variant="h6">
      The current theme is <b>{mode}</b>
    </Typography>
  );
}

export default ChildComponent;