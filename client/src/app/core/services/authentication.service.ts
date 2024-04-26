import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FACEBOOK_SIGN_IN, GOOGLE_SIGN_IN, LOGIN_USER } from '../graphQl';
import { DtoLoginResponse } from '../dto/auth.dto';
import { from, Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login/dist/esm/definitions';
import { environment } from '../../../environments/environment';

const FACEBOOK_PERMISSIONS = [
  'email',
];

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly apollo: Apollo, private readonly storage: StorageService) {
    GoogleAuth.initialize({ clientId: environment.googleAppId });
    FacebookLogin.initialize({ appId: environment.facebookAppId });
  }

  login(login: string, password: string): Observable<void> {
    return this.apollo.mutate<{ loginUser: DtoLoginResponse }>({
      mutation: LOGIN_USER, variables: {
        loginUserArgs: {
          login,
          password,
        },
      },
      fetchPolicy: 'network-only',
    }).pipe(
      mergeMap(({ data }) => this.storage.set('auth-token', data.loginUser.token)),
    );
  }

  loginWithGoogle(): Observable<void> {
    return from(GoogleAuth.signIn())
      .pipe(
        switchMap((signInPayload: User) => this.apollo.mutate<{ googleSignIn: DtoLoginResponse }>({
          mutation: GOOGLE_SIGN_IN, variables: {
            googleSignInArgs: {
              idToken: signInPayload.authentication.idToken,
            },
          },
          fetchPolicy: 'network-only',
        }).pipe(
          mergeMap(({ data }) => this.storage.set('auth-token', data.googleSignIn.token)),
        )),
      );
  }

  loginWithFacebook(): Observable<void> {
    return from(FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }))
      .pipe(
        switchMap((signInPayload: FacebookLoginResponse) => this.apollo.mutate<{ facebookSignIn: DtoLoginResponse }>({
            mutation: FACEBOOK_SIGN_IN, variables: {
              facebookSignInArgs: {
                accessToken: signInPayload.accessToken.token,
              },
            },
            fetchPolicy: 'network-only',
          }).pipe(
            mergeMap(({ data }) => this.storage.set('auth-token', data.facebookSignIn.token)),
          )),
      );
  }

  logout(): Observable<void> {
    return this.storage.remove('auth-token');
  }

  getToken(): Observable<string> {
    return this.storage.get('auth-token');
  }
}
