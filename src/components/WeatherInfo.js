import * as React from "react";
import "../App.css";
import { useState } from "react";
import { WeatherCard } from "./WeatherCard";
import { AlertBox } from "./AlertBox.js";

export const WeatherInfo = () => {
  const [value, setValue] = useState("");
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [cityName, setCityName] = useState();
  const [imgSrc, setImgSrc] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [description, setDescription] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();

  function getWeatherInfo(value) {
    const apiKey = "82787504b61bd4f6735c16095f1702db";
    const city = value;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod !== "404") {
          setData(data);
        } else {
          showAlert();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const setData = (data) => {
    setCityName(data.name);
    setImgSrc(
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    );
    setDescription(data.weather[0].description);
    setWindSpeed(data.wind.speed);
    setHumidity(data.main.humidity);
    setMinTemp(data.main.temp_min);
    setMaxTemp(data.main.temp_max);
    setTemperature(Math.round(data.main.temp));
    setBackground();
  };

  function setBackground() {
    document.querySelector(".App").style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + value + "')";
  }

  function showAlert() {
    const alert = document.getElementById("cityAlert");
    alert.style.display = "flex";
    setCityName("");
    setTimeout(() => {
      alert.style.display = "none";
    }, 5000);
  }

  const handleClick = () => {
    if (!value == "") {
      getWeatherInfo(value);
      setValue("");
    }
  };

  return (
    <div>
      <AlertBox />
      <WeatherCard
        handleClick={handleClick}
        setValue={setValue}
        value={value}
        cityName={cityName}
        temperature={temperature}
        windSpeed={windSpeed}
        humidity={humidity}
        description={description}
        maxTemp={maxTemp}
        minTemp={minTemp}
        imgSrc={imgSrc}
      />
    </div>
  );
};
