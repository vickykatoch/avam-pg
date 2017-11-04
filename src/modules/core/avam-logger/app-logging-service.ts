import { Injectable } from '@angular/core';

@Injectable()
export class AppLoggingService {

  constructor() { }

  log(msg : string) {
    console.log(msg);
  }
}
