import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/statistics';
    return this.http.get(url);
  }

  getTypesStatistics(): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/statistics/types';
    return this.http.get(url);
  }
}
