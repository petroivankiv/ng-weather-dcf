import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from 'src/app/app.service';

import { AppComponent } from './app.component';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from 'src/app/weather.config';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    AppService,
    { provide: WEATHER_CONFIG, useValue: WEATHER_DI_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
