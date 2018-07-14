import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworktypeserviceService {

  public networkType: string;

  constructor() { }

  getUrl(): string {
    if (this.networkType === 'mainnet') {
      return 'http://130.161.119.211/trustchain/';
    }
    return 'http://130.161.119.211:81/trustchain/';
  }
}
