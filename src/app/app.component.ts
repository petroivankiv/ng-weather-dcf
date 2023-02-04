import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { AppService } from 'src/app/app.service';
import { WeatherApiData } from 'src/app/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather API';

  weather$!: Observable<WeatherApiData>;

  private searchTerms = new Subject<string>();

  constructor(private appService: AppService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.weather$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.getCurrentWeather(term)),
    );
  }
}
