import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(limit: number): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/users?limit=' + limit;
    return this.http.get(url);
  }
}
