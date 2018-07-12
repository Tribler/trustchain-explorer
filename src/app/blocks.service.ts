import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Block} from './block';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient) { }

  getRecentBlocks(limit: number, offset: number): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/recent?limit=' + limit + '&offset=' + offset;
    return this.http.get<any>(url);
  }

  getBlock(hash: string): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/blocks/' + hash;
    return this.http.get<any>(url);
  }

  getLatestBlocks(pubkey: string): Observable<any> {
    const url = 'http://130.161.119.211/trustchain/users/' + pubkey + '/blocks';
    return this.http.get<any>(url);
  }
}
