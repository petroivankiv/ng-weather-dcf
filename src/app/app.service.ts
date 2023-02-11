import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { WeatherApiData } from 'src/app/weather.model';
import { IWeatherConfig, WEATHER_CONFIG } from 'src/app/weather.config';
import { ICity } from 'src/app/autocomplete/autocomplete.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private http: HttpClient,
    @Inject(WEATHER_CONFIG) private config: IWeatherConfig
  ) {}

  /** GET weather from the API */
  getCurrentWeather(term: string): Observable<WeatherApiData> {
    const weatherApiUrl = `${this.config.url}?q=${term}&appid=${this.config.apiKey}`;

    return this.http
      .get<WeatherApiData>(weatherApiUrl)
      .pipe(catchError(this.handleError<WeatherApiData>({} as WeatherApiData)));
  }

  /** GET list of cities */
  public getCityList(): Observable<ICity[]> {
    return this.http
      .get('assets/city.list.json')
      .pipe(
        map((cities: any) =>
          cities.map(({ id, name, country }: ICity) => ({ id, name, country }))
        )
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => of(result as T);
  }
}
