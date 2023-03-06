import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppService } from 'src/app/app.service';

import { AppComponent } from './app.component';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from 'src/app/weather.config';
import { BackgroundComponent } from './background/background.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';
import { TableComponent } from './table/table.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    GoogleMapsComponent,
    WeatherContentComponent,
    TableComponent,
    AutocompleteComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [
    AppService,
    { provide: WEATHER_CONFIG, useValue: WEATHER_DI_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
