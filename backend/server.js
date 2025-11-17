import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/clima", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "Falta el parámetro city" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`;

  try {
    const { data } = await axios.get(url);

    const result = {
      current: {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed
      },
      hourly: [],
      daily: []
    };

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Ciudad no encontrada" });
  }
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
