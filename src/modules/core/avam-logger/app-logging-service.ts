import { LoggerFactory } from './core/logger.factory';
import { Injectable } from '@angular/core';
import { LogOptions, ApplicationLogger, LogLevel, LoggerStaticInfo } from './core/index';
import { LoggingStore } from './core/logging.store';

@Injectable()
export class AppLoggingService {

  constructor() { }

  public init(loggerStaticInfo: LoggerStaticInfo, options?: LogOptions) {
    LoggingStore.instance.initialize(loggerStaticInfo,options);
  }

  getLogger(name: string, level?: LogLevel) : ApplicationLogger {
    return LoggerFactory.instance.getLogger(name,level);
  }

}
