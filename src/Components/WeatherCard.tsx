import {
  Box,
  Button,
  Container,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/";
import { useRef, useState } from "react";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import WbCloudySharpIcon from "@mui/icons-material/WbCloudySharp";
import { useGetWeatherDataQuery } from "./Store/WeatherApi";

export default function WeatherCard() {
  console.log("Weather rendered!!!!!");
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const { data, isFetching, isError, refetch } = useGetWeatherDataQuery(input, {
    skip: !input,
  });

  const handleClick = () => {
    if (inputRef.current?.value.trim()) {
      setInput(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          type="text"
          inputRef={inputRef}
          placeholder="Enter city name..."
          size="small"
          variant="outlined"
          sx={{
            width: "60%",
            borderRadius: 1,
          }}
        />
        <Button
          size="medium"
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        elevation={3}
      >
        {isFetching ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Skeleton height={"12vh"} sx={{ m: 4 }} />
          </Box>
        ) : isError ? (
          <Box>
            <Typography variant="h6" color="error">
              Failed to fetch weather data. Please check your internet
              connection OR enter correct city name.
            </Typography>
            <Button variant="contained" color="error" onClick={refetch}>
              Retry
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                City Name: {data?.name || "N/A"}
              </Typography>
            </Grid>
            <Grid xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Temperature: {data?.main.temp ? ` ${data?.main.temp}` : "N/A"}
              </Typography>
              <WbSunnySharpIcon sx={{ color: "yellow", ml: 1 }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Feels Like:{" "}
                {data?.main.feels_like ? `${data.main.feels_like}°C` : "N/A"}
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Humidity:{" "}
                {data?.main.humidity ? `${data.main.humidity}%` : "N/A"}
              </Typography>
            </Grid>
            <Grid xs={12} md={8}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Clouds
                <WbCloudySharpIcon
                  sx={{
                    color: "#ababab",
                  }}
                />
                :
                {data?.weather[0].description
                  ? `${data.weather[0].description}`
                  : "N/A"}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  );
}
