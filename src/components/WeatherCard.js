import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "../App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CardContents } from "./CardContents.js";

export const WeatherCard = (props) => {
  const searchTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });
  return (
    <Box
      sx={{
        marginInline: "auto",
        maxWidth: 475,
        marginTop: "18vh",
      }}
    >
      <Card
        sx={{
          minHeight: "35vh",
          background: "rgba(0, 0, 0, 0.9)",
          color: "white",
          padding: "1em",
          borderRadius: "30px",
        }}
        variant="outlined"
      >
        <React.Fragment>
          <CardContent>
            <ThemeProvider theme={searchTheme}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  style={{ color: "white", width: "100%" }}
                  id="searchInput"
                  label="Enter City"
                  value={props.value}
                  onChange={(e) => props.setValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      props.setValue(e.target.value);
                      {
                        props.handleClick();
                      }
                    }
                  }}
                  InputLabelProps={{
                    style: { color: "White", borderRadius: "25px" },
                  }}
                  inputProps={{
                    style: { color: "White", borderRadius: "25px" },
                  }}
                  autoFocus={true}
                  placeholder="Ex. London"
                  sx={{
                    backgroundColor: "rgba(39, 37,33,0.9)",
                  }}
                />

                <IconButton
                  color="primary"
                  sx={{
                    backgroundColor: "rgba(39, 37,33,0.9)",
                    border: "1px solid white",
                    marginTop: "2.5px",
                    marginLeft: "20px",
                  }}
                  variant="filled"
                  size="large"
                  onClick={props.handleClick}
                  aria-label="delete"
                >
                  <SearchIcon style={{ textAlign: "center" }} />
                </IconButton>
              </div>
              <CardContents
                cityName={props.cityName}
                temperature={props.temperature}
                windSpeed={props.windSpeed}
                humidity={props.humidity}
                description={props.description}
                maxTemp={props.maxTemp}
                minTemp={props.minTemp}
                imgSrc={props.imgSrc}
              />
            </ThemeProvider>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};
