import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UrlInterceptor} from './shared/interceptors/url.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenPreloader} from './shared/preloaders/token.preloader';

export function UserInfoPreloaderFactory(provider: TokenPreloader) {
  return () => provider.load();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TokenPreloader,
    {provide: APP_INITIALIZER, useFactory: UserInfoPreloaderFactory, deps: [TokenPreloader], multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
