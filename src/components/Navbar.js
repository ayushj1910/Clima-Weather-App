import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export function Navbar() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const date = new Date();
  const [time, setTime] = useState(
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
  function hasOneDigit(date) {
    return String(Math.abs(date)).charAt(0) == date;
  }
  useEffect(() => {
    setInterval(function () {
      const date = new Date();
      const hours = hasOneDigit(date.getHours())
        ? "0" + date.getHours()
        : date.getHours();
      const minutes = hasOneDigit(date.getMinutes())
        ? "0" + date.getMinutes()
        : date.getMinutes();
      const seconds = hasOneDigit(date.getSeconds())
        ? "0" + date.getSeconds()
        : date.getSeconds();

      setTime(hours + ":" + minutes + ":" + seconds);
    }, 1000);
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              textAlign="left"
              component="div"
              sx={{ flexGrow: 1, display: { sm: "inline" } }}
            >
              Clima°
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              textAlign="right"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <AccessTimeOutlinedIcon sx={{ marginRight: "10px" }} /> {time}
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
