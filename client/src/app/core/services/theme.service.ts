import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StorageService } from './storage.service';
import { take, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = new BehaviorSubject<string>('light-theme');

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly storage: StorageService,
  ) {
  }

  themeInit(): void {
    this.storage.get('theme-color')
      .pipe(
        withLatestFrom(this.currentTheme),
        take(1),
      )
      .subscribe(([color, currentTheme]) => {
        if (color && currentTheme !== color) {
          this.switchTheme(color === 'dark-theme');
          this.currentTheme.next(color);
        }
      });
  }

  switchTheme(isDark: boolean): void {
    if (isDark) {
      this.enableDarkTheme();
    } else {
      this.enableLightTheme();
    }
  }

  private enableDarkTheme(): void {
    this.storage.set('theme-color', 'dark-theme')
      .pipe(take(1))
      .subscribe(() => {
        this.document.body.classList.remove('light-theme');
        this.document.body.classList.add('dark-theme');
        this.currentTheme.next('dark-theme');
      });
  }

  private enableLightTheme(): void {
    this.storage.set('theme-color', 'light-theme')
      .pipe(take(1))
      .subscribe(() => {
        this.document.body.classList.remove('dark-theme');
        this.document.body.classList.add('light-theme');
        this.currentTheme.next('light-theme');
      });
  }
}
