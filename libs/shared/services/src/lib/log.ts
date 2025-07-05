import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  consoleLog(val: string) {
    console.log(val);
  }
}
