import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  isDarkMode!: Observable<boolean>;

  constructor(private readonly themeService: ThemeService, private readonly router: Router) {
  }

  ngOnInit() {
    this.isDarkMode = this.themeService.currentTheme
      .pipe(
        map((color) => color === 'dark-theme')
      );
  }

  switchDarkMode(checked: boolean): void {
    this.themeService.switchTheme(checked);
  }

  acceptChanges(): void {
    this.router.navigate(['dashboard']);
  }
}
