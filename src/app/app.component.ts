import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
} from 'rxjs/operators';

import { AppService } from 'src/app/app.service';
import { StyleManager } from 'src/app/core/style-manager.service';
import { WeatherApiData } from 'src/app/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Вітаємо';
  isDark = false;

  weather$!: Observable<WeatherApiData>;

  private searchTerms = new Subject<string>();

  constructor(
    private appService: AppService,
    private styleManager: StyleManager
  ) {
    this.isDark = this.styleManager.isDark;
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.weather$ = this.searchTerms.pipe(
      filter((query) => query?.length > 3),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.getCurrentWeather(term))
    );
  }
}
