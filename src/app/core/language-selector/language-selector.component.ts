import { Inject, Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  locales: Record<string, string> = {
    ua: 'ua',
    'en-US': 'en',
  };

  constructor(@Inject(LOCALE_ID) public activeLocale: string) {}

  onChange() {
    this.activeLocale = this.activeLocale === 'ua' ? 'en-US' : 'ua';
    window.location.href = `/${this.activeLocale}`;
  }
}
