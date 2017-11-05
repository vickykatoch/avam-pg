import { Component } from '@angular/core';
import { AppLoggingService, LogOptions, ApplicationLogger, LogLevel } from '@avam-logger/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logger : ApplicationLogger;

  constructor(loggingService : AppLoggingService) {
    loggingService.init("AVAM-PLAYGROUND",this.getLogOptions());
    this.logger = loggingService.getLogger('AppComponent', LogLevel.ALL);
    this.logger.debug('Logger has been started');
  }

  private getLogOptions() : LogOptions {
    return {
      appLogLevel : LogLevel.ALL,
      forcedLogLevel : LogLevel.ALL,
      appenders : [
        'console',
        'ajax'
      ],
      logServer :  {
        type : 'socket',
        host : 'http://localhost:8080',
        topic : 'J-LOG'
      }
    };
  }
}
