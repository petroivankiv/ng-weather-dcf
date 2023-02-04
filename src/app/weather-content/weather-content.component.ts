import { Component, Input } from '@angular/core';
import { WeatherApiData } from 'src/app/weather.model';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.css']
})
export class WeatherContentComponent {
  @Input() weatherApiData!: WeatherApiData | null;
}
