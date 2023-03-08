import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent } from './background/background.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';
import { TableComponent } from './table/table.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { HeaderComponent } from './header/header.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

const components = [
  BackgroundComponent,
  AutocompleteComponent,
  WeatherContentComponent,
  TableComponent,
  GoogleMapsComponent,
  HeaderComponent,
  LanguageSelectorComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: components,
})
export class CoreModule {}
