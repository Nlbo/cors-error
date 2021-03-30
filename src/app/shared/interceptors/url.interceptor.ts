import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('skipToken')) {
      req = req.clone({
        headers: req.headers.set('authorization', localStorage.getItem('token'))
      });
      return next.handle(req);
    } else {
      req = req.clone({
        headers: req.headers.delete('skipToken')
      })
      return next.handle(req);
    }
  }
}

