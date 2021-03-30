import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEventsModel} from '../../interfaces/events.interface';

@Injectable({
  providedIn: 'root'
})

export class SliderService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IEventsModel> {
    return this.http.get<IEventsModel>('/api/widget/v1/nearest_events_by_date?date=2020-08-01&date_interval=500');
  }
}
