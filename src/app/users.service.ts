import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getUsers(limit: number): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://' + environment.trustchain_crawler_ip + ':' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/users?limit=' + limit;
    return this.http.get(url);
  }
}
