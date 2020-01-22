import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private seenBytes = 0;
  private observable = Observable.create();

  constructor() { }

  openEvents(): Observable<any> {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://' + environment.trustchain_crawler_ip + '/events');
    this.seenBytes = 0;

    const observable = Observable.create((observer) => {

      xhr.onreadystatechange = () => {
        if(xhr.readyState === 3) {
          const newData = xhr.response.substr(this.seenBytes);
          const parts = newData.split('\n');
          for (const part of parts) {
            if (part.length === 0) { continue; }
            console.log(part);
            const jsonData = JSON.parse(part);
            if (jsonData['type'] === 'block') {
              observer.next(jsonData);
            }
          }
          this.seenBytes = xhr.responseText.length;
        }
      };
    });

    xhr.addEventListener("error", function(e) {
      console.log(e);
    });
    xhr.send();

    return observable
  }
}
