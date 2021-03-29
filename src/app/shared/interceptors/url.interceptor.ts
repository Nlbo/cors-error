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
        headers: req.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiMDBhYWQyMDVlODg0Njg2MTMwODg4OTM5OGI5NjAyNzAwMzU0NzA0YTZmZTM3M2ViNDFlOTY1MWVlYzA0ZmMzNTM5MjA5NWRmNTMwY2FjZTIzMWVjMjY3ZjFiZjE5YTlmZDY3NTAwMGViZmYyYzlmMTk1YWYwMDcyZTRjNGU4NmYyMzQyNWQ2OTA2NWJhNjQ5YTJhODU5MDBiYThhZTMzZGRhODFkMDQzNzlmMWVlZGU4Njg0MDBiNDhmM2ZhYjA1ZTRjOGVlMzAyYjBmMzliZjcxMDMzMmQwMzg5ODkxZmMxZjI2OTlmYTY1MjQzOTc2MDQ3NWFmMzY1ZTk0MjY3NjA5MjkwOTFiMDBjY2UzMzY3OTM2OGVmYTg4M2NkMzIxMDI1ZDJiNjQwMWZjNzYzMTk1ZDkyYzY5MjdkMmEyNmU3NmM1MGY1ZDIzMzU4ODNkMjcwNGRmNDFhYzM1YjhhYzllZWMzMzU0MTcyOGQ3MjdhM2IxZTM3MDg0NjcwOGYzYzNkOTc2MDY3MmFkOGRjMGViY2UzYTNiNWQ1MGY0M2I3YmE5ODhiNzQ2OTBlYTliNWQ4NTc5NjczNjMzYjQ0NTE5ODEyODVlZmE0MjFiOTBiOTJiZWY4MWIzMTU5ZmZjZTZlZWViODQzZGQxN2RjMTBjMDQ3NmEyNDg0ZWY3MzRlNGEwOTljOThiMTQ4YzY4ZDcxZjc1Y2MzZjZjYzZmMDExNzAiLCJpYXQiOjE2MTY2NzUyNjF9.E5T18aO8kwT2nHR7JWjXXZ0aG9WIvBejtO1NupBrazU')
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

