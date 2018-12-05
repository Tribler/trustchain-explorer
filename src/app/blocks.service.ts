import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getRecentBlocks(limit: number, offset: number): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const millis = new Date().getTime();
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/recent?limit=' + limit + '&offset=' + offset + '&maxtime=' + millis;
    return this.http.get<any>(url);
  }

  getBlock(hash: string): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/blocks/' + hash;
    return this.http.get<any>(url);
  }

  getLatestBlocks(pubkey: string): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/users/' + pubkey + '/blocks';
    return this.http.get<any>(url);
  }
}
