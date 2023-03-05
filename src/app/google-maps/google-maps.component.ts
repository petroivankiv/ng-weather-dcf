import { Component, Inject, Input, OnInit } from '@angular/core';

import { Loader } from '@googlemaps/js-api-loader';
import { IWeatherConfig, WEATHER_CONFIG } from 'src/app/weather.config';
import { WeatherApiData } from 'src/app/weather.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  map: any;

  @Input() weatherApiData!: WeatherApiData;

  constructor(@Inject(WEATHER_CONFIG) private config: IWeatherConfig) {}

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: this.config.googleMapApiKey,
      version: 'weekly',
      // ...additionalOptions,
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: {
            lat: this.weatherApiData.coord.lat,
            lng: this.weatherApiData.coord.lat,
          },
          zoom: 8,
        }
      );
    });
  }
}
