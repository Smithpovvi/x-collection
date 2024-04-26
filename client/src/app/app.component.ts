import { Component, OnInit } from '@angular/core';
import registerIcons from './utils/register-icons';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly themeService: ThemeService) {
  }

  ngOnInit() {
    registerIcons();
    this.themeService.themeInit();
  }
}
