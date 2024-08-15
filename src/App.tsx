import { Container } from "@mui/material";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Weather Forcast</h1>
      <WeatherCard />
    </Container>
  );
}

export default App;
