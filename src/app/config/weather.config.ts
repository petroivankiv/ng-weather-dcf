import { InjectionToken } from '@angular/core';

// variables are defined in the .env file
declare const WEATHER_API_KEY: string;
declare const WEATHER_API_URL: string;

export interface IWeatherConfig {
  apiKey: string;
  url: string;
  googleMapApiKey: string;
}

export const WEATHER_DI_CONFIG: IWeatherConfig = {
  apiKey: WEATHER_API_KEY,
  url: WEATHER_API_URL,
  googleMapApiKey: '',
};

export const WEATHER_CONFIG = new InjectionToken<IWeatherConfig>(
  'weather.config'
);
