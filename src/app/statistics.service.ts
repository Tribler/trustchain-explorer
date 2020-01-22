import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics';
    return this.http.get(url);
  }

  getTypesStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics/types';
    return this.http.get(url);
  }

  getBlockCreationStatistics(): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/statistics/block_creation';
    return this.http.get(url);
  }
}
