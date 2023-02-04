import { InjectionToken } from '@angular/core';

export interface IWeatherConfig {
  apiKey: string;
  url: string;
}

export const WEATHER_DI_CONFIG: IWeatherConfig = {
  apiKey: '599b6413eba31abc97bf7d30f27332c8',
  url: 'https://api.openweathermap.org/data/2.5/weather',
}

export const WEATHER_CONFIG = new InjectionToken<IWeatherConfig>('weather.config');
