import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getRecentBlocks(limit: number, offset: number): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const millis = new Date().getTime();
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/recent?limit=' + limit + '&offset=' + offset + '&maxtime=' + millis;
    return this.http.get<any>(url);
  }

  getBlock(hash: string): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/blocks/' + hash;
    return this.http.get<any>(url);
  }

  getLatestBlocks(pubkey: string): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/users/' + pubkey + '/blocks';
    return this.http.get<any>(url);
  }
}
