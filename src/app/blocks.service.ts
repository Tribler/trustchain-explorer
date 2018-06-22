import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Block} from './block';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient) { }

  getRecentBlocks(): Observable<Block[]> {
    const url = 'http://130.161.119.211/trustchain/recent';
    return this.http.get<Block[]>(url);
  }

  getBlock(hash: string): Observable<Block> {
    const url = 'http://130.161.119.211/trustchain/blocks/' + hash;
    return this.http.get<Block>(url);
  }
}
