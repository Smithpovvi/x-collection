import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.getToken().pipe(
      mergeMap((token?: string) => {
        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: token,
            },
          });
        }
        return next.handle(req);
      }),
    );
  }
}
