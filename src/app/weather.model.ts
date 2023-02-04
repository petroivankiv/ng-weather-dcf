export interface WeatherApiData {
  name: string;
  clouds: { all: number };
  coord: { lon: number; lat: number };
  cod: number;
  id: number;
  timezone: number;
  wind: { speed: number; deg: number };
  sys: { country: string; sunrise: number; sunset: number };
  weather: { main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    preassure: number;
    humidity: number;
    sea_level: number;
  };
}
