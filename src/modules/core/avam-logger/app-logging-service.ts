import { Injectable } from '@angular/core';
import { LogOptions, ApplicationLogger, LogLevel } from './core/index';
import { LoggingStore } from './core/localindex';

@Injectable()
export class AppLoggingService {

  constructor() { }

  public init(appName: string, options: LogOptions) {
    LoggingStore.instance.initialize(appName,options);
  }

  getLogger(name: string, level?: LogLevel) : ApplicationLogger {
    return LoggingStore.instance.getLogger(name, level);
  }

}
