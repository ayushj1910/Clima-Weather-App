import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import WindPowerSharpIcon from "@mui/icons-material/WindPowerSharp";
import NorthSharpIcon from "@mui/icons-material/NorthSharp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import Grid from "@mui/material/Grid";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import "../App.css";

export const CardContents = (props) => {
  const floatBtnStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    marginTop: "5px",
    padding: "8px",
    borderRadius: "30px",
    width: "fit-content",
  };

  if (props.cityName == "" || !props.temperature) {
    return (
      <div className="App-logo">
        <WbSunnyTwoToneIcon style={{ fontSize: "200px", marginTop: "25px" }} />
      </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h5" component="div">
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnSharpIcon sx={{ fontSize: "45px" }} />
                    <span style={{ fontSize: "40px" }}>{props.cityName}</span>
                  </div>
                  <span style={{ marginLeft: "10px", fontSize: "30px" }}>
                    {props.temperature}°C
                  </span>
                </div>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    border: " 1px solid white",
                    borderRadius: "30px",
                  }}
                >
                  <WindPowerSharpIcon size="medium" />
                  <span style={{ marginLeft: "5px", fontSize: "15px" }}>
                    {props.windSpeed} Km/h
                  </span>
                </div>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={props.imgSrc} />
          <span>{props.description}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={floatBtnStyle}
            sx={{
              border: " 1px solid white",
            }}
          >
            HUM {props.humidity}%
          </Typography>
          <Typography
            style={floatBtnStyle}
            sx={{
              border: " 1px solid red",
            }}
          >
            <NorthSharpIcon /> {props.maxTemp}°C
          </Typography>
          <Typography style={floatBtnStyle} sx={{ border: "1px solid green" }}>
            <SouthSharpIcon /> {props.minTemp}°C
          </Typography>
        </div>
      </div>
    );
  }
};
