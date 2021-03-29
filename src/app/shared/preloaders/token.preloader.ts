import {Injectable} from '@angular/core';
import {AuthService} from '../api/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenPreloader {

  constructor(
    private authService: AuthService) {
  }

  load() {
    return new Promise(async (resolve, reject) => {
      this.authService.getToken()
        .subscribe((response) => {
          let token = response.headers.get('x-auth-token');
          console.log("token = ", token);
        });
      resolve(true);
    });
  }
}
