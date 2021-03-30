import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): any {
    const headers = new HttpHeaders().set('skipToken', '');
    return this.http.get('/api/widget/v1/settings', {observe: 'response', headers});
  }


}
