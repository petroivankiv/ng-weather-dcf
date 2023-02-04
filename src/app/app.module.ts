import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppService } from 'src/app/app.service';

import { AppComponent } from './app.component';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from 'src/app/weather.config';
import { BackgroundComponent } from './background/background.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    GoogleMapsComponent,
    WeatherContentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MatListModule, MatIconModule],
  providers: [
    AppService,
    { provide: WEATHER_CONFIG, useValue: WEATHER_DI_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
