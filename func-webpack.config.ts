import { Configuration, DefinePlugin } from 'webpack';
import {
  CustomWebpackBrowserSchema,
  TargetOptions,
} from '@angular-builders/custom-webpack';

/**
 * This is where you define a function that modifies your webpack config
 */
export default (
  cfg: Configuration,
  opts: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  cfg?.plugins?.push(
    new DefinePlugin({
      APP_VERSION: JSON.stringify('version'),
    })
  );

  return cfg;
};
