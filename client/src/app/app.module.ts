import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { InMemoryCache } from '@apollo/client/core';
import { SharedModule } from './modules/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ApolloModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.apiUrl,
        }),
      }),
      deps: [HttpLink],
    },
    [
      {
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: TokenInterceptor,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
