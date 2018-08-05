import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private seenBytes = 0;
  private observable = Observable.create();

  constructor() { }

  openEvents(): Observable<any> {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://130.161.119.211/events');
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
