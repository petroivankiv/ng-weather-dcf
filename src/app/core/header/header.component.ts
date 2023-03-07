import { Component } from '@angular/core';
import { StyleManager } from 'src/app/core/style-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDark = false;

  constructor(private styleManager: StyleManager) {
    this.isDark = this.styleManager.isDark;
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
