import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.authenticationService.getToken().pipe(
      mergeMap((token) => {
        if (token) {
          return of(true);
        } else {
          return from(this.router
            .navigate(['/auth'], {
              queryParams: {
                accessDenied: true,
              },
            })).pipe(
            mergeMap(() => of(false)),
          );
        }
      }),
    );
  }

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
