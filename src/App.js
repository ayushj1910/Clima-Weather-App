import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { WeatherInfo } from "./components/WeatherInfo";
import { Footer } from "./components/Footer";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <div className="App" style={{ backgroundColor: "#000000" }}>
        <Navbar />
        <Container fixed>
          <WeatherInfo />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
