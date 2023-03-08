import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  withLatestFrom,
} from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

export interface ICity {
  id: number;
  name: string;
  country: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl<string | ICity>('');
  options: ICity[] = [];
  filteredOptions!: Observable<ICity[]>;

  @Output() search = new EventEmitter();

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      withLatestFrom(this.appService.getCityList()),
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      map(([value, cities]) => {
        const options = (cities as ICity[]) || [];
        const name: string =
          typeof value === 'string' ? value : (value as ICity)?.name;

        this.search.emit(name);

        return name ? this._filter(name as string, options) : options.slice();
      })
    );
  }

  displayFn(city: ICity): string {
    return city && city.name ? city.name : '';
  }

  private _filter(name: string, options: ICity[]): ICity[] {
    const filterValue = name.toLowerCase();

    return options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
