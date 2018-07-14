import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getUsers(limit: number): Observable<any> {
    const networkType = this.cookieService.get('networktype');
    const url = 'http://130.161.119.211:' + (networkType === 'testnet' ? '81' : '80') + '/trustchain/users?limit=' + limit;
    return this.http.get(url);
  }
}
