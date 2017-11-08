import { Component } from '@angular/core';
import { AppLoggingService, LogOptions, ApplicationLogger, LogLevel, LoggerStaticInfo } from '@avam-logger/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logger: ApplicationLogger;

  constructor(loggingService: AppLoggingService) {
    let staticInfo : LoggerStaticInfo =  { appName : "AVAM-PLAYGROUND" };
    loggingService.init(staticInfo, this.getLogOptions());
    this.logger = loggingService.getLogger('AppComponent', LogLevel.ALL);
    staticInfo.user = "BK";
    loggingService.init(staticInfo);
    this.logger.info('Logger has been started');
    staticInfo.region = "NA";
    loggingService.init(staticInfo);
    this.logger.info('Logger has been started');
    staticInfo.env = "DEV";
    loggingService.init(staticInfo);
    this.logger.info('Logger has been started');
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

    setTimeout(()=> {
      try {
        let x : any
        console.log(x.q);
      } catch(err) {
        this.logger.error('Error while Loading Application',err);
      }
    }, 1000);
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
        name: 'worker',
        format: 'json',
        logLevel: LogLevel.ALL,
        isDefferred : true,
        path  : '/assets/workers/shared-logger.js'
      }],
      logServer: {
        type: 'socket',
        host: 'http://localhost:8080',
        topic: 'J-LOG'
      }
    };
  }
}
