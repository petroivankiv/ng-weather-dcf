import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppService } from 'src/app/app.service';

import { AppComponent } from './app.component';
import {
  WEATHER_CONFIG,
  WEATHER_DI_CONFIG,
} from 'src/app/config/weather.config';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    AppService,
    { provide: WEATHER_CONFIG, useValue: WEATHER_DI_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
