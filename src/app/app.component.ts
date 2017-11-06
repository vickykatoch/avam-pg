import { Component } from '@angular/core';
import { AppLoggingService, LogOptions, ApplicationLogger, LogLevel } from '@avam-logger/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logger: ApplicationLogger;

  constructor(loggingService: AppLoggingService) {
    loggingService.init("AVAM-PLAYGROUND", this.getLogOptions());
    this.logger = loggingService.getLogger('AppComponent', LogLevel.ALL);
    this.logger.debug('Logger has been started');
    let ctr =0;
    setInterval(()=> {
      this.logger.info(`Hi info : ${ctr}`);
      this.logger.warn(`Hi Warn : ${ctr}`);
      this.logger.error(`Hi Error : ${ctr}`);
      ctr++;
    },1000);
    this.logger.time('Loading AppComponent');
    setTimeout(()=> {
      this.logger.timeEnd('Loading AppComponent');
    }, 2500);
  }

  private getLogOptions(): LogOptions {
    return {
      appLogLevel: LogLevel.ALL,
      logInterval : 10000,
      appenders: [{
        name: 'console',
        format: 'text',
        logLevel: LogLevel.ALL
      }, {
        name: 'ajax',
        format: 'json',
        logLevel: LogLevel.ALL,
        isDefferred : true
      }],
      logServer: {
        type: 'socket',
        host: 'http://localhost:8080',
        topic: 'J-LOG'
      }
    };
  }
}
