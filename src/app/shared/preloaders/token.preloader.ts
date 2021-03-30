import {Injectable} from '@angular/core';
import {AuthService} from "../api/auth/auth.service";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class  TokenPreloader {

  constructor(
    private authService: AuthService) {
  }

  load() {
    return new Promise(async (resolve, reject) => {
      this.authService.getToken()
        .subscribe((response) => {
          localStorage.setItem('token', response.headers.get('x-auth-token'))
        });
      resolve(true);
    });
  }
}
