export interface WeatherApiData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      preassure: number;
      humidity: number;
    };
    weather: {
      main: string;
    }[];
  }
