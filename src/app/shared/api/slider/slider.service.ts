import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SliderService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('https://zapomni.lastick.ru/api/widget/v1/nearest_events_by_date?date=2020-08-01&date_interval=90');
  }
}
