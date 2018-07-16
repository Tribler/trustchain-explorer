import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics';
    return this.http.get(url);
  }

  getTypesStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics/types';
    return this.http.get(url);
  }

  getBlockCreationStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics/block_creation';
    return this.http.get(url);
  }
}
