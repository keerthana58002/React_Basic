
import React from "react";
import { useThemeContext } from "./ThemeContext";
import { Button } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

function ToggleButton() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="contained"
      onClick={toggleTheme}
      startIcon={mode === "light" ? <DarkMode /> : <LightMode />}
      sx={{ marginTop: "30px" }}
    >
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}


export default ToggleButton;