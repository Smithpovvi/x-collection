import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {

  constructor(private readonly router: Router, private readonly authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  goToSettings() {
    this.router.navigate(['dashboard', 'settings']);
  }

  logout() {
    this.authenticationService.logout().pipe(take(1)).subscribe(() => {
      this.router.navigate(['auth', 'login']);
    });
  }
}
