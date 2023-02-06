import { Component, Input, OnChanges } from '@angular/core';

import { WeatherApiData } from 'src/app/weather.model';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.css'],
})
export class WeatherContentComponent implements OnChanges {
  mainData: Record<string, string | number>[] = [];
  sysData: Record<string, string | number>[] = [];
  windData: Record<string, string | number>[] = [];
  mainColumns = [
    { label: 'Температура', key: 'temp' },
    { label: 'Відчувається як', key: 'feels_like' },
    { label: 'Тиск', key: 'pressure' },
    { label: 'Вологість', key: 'humidity' },
    { label: 'Рівень моря', key: 'sea_level' },
  ];

  sysColumns = [
    { label: 'Країна', key: 'country' },
    { label: 'Місто/село', key: 'name' },
    { label: 'Часова зона', key: 'timezone' },
    { label: 'Опис', key: 'description' },
  ];
  windColumns = [
    { label: 'Швидкість вітру', key: 'speed' },
    { label: 'Напрям вітру', key: 'deg' },
    { label: 'Схід сонця', key: 'sunrise' },
    { label: 'Захід сонця', key: 'sunset' },
  ];

  @Input() weatherApiData!: WeatherApiData | null;

  ngOnChanges() {
    if (this.weatherApiData) {
      const { main, sys, weather, timezone, name, wind } = this.weatherApiData;

      this.mainData = [{ ...main }];
      this.sysData = [
        {
          country: sys.country,
          description: weather[0]?.description,
          name,
          timezone,
        },
      ];
      this.windData = [
        {
          speed: wind.speed,
          deg: wind.deg,
          sunrise: sys.sunrise,
          sunset: sys.sunset,
        },
      ];
    }
  }
}
