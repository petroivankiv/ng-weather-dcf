import { Configuration, DefinePlugin } from 'webpack';

require('dotenv').config()

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
  plugins: [
    new DefinePlugin({
      WEATHER_API_KEY: JSON.stringify(process.env['WEATHER_API_KEY']),
      WEATHER_API_URL: JSON.stringify(process.env['WEATHER_API_URL']),
    }),
  ],
} as Configuration;
