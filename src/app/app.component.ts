import { Component } from '@angular/core';
import { AppLoggingService } from '@avam-logger/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(logger : AppLoggingService) {
    logger.log('Hi There');
  }
}
