export const weatherData = {
  current: {
    location: "Cancún, MX",
    temp: 29,
    feels_like: 33,
    humidity: 72,
    wind_speed: 14,
    uv: 6,
    pressure: 1010,
    visibility: 10,
    icon: "sun",
    description: "Mayormente soleado con nubes dispersas"
  },
  hourly: [
    { time: "17:00", deg: 30, icon: "sun" },
    { time: "18:00", deg: 29, icon: "cloud" },
    { time: "19:00", deg: 27, icon: "rain" }
  ],
  daily: [
    { day: "Vie", max: 31, min: 26, icon: "cloud" },
    { day: "Sáb", max: 30, min: 25, icon: "rain" },
    { day: "Dom", max: 32, min: 26, icon: "sun" }
  ]
};
