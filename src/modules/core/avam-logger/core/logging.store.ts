import { AppenderRepository } from './appender-repository';
import { LogLevel, LogOptions } from "./logging.models";
import { LoggingEvent } from './log-event';
import { LoggerFactory } from './logger.factory';
import { ApplicationLogger } from "./logger.interface";
import { Appender } from "./log.appender";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import { Subscription } from "rxjs/Subscription";
import { LogWriter } from '@avam-logger/core/log-writer';

interface LoggerConfig {
  logger: ApplicationLogger;
  level: LogLevel;
}


export class LoggingStore {
  private static _instance = new LoggingStore();
  private loggerMap: Map<string, LoggerConfig> = new Map();
  private immedWriter = LogWriter.getImmediateLogWriter();
  private defLogWriter : LogWriter;
  private _applicationName: string;


  constructor() {
    if (LoggingStore._instance) {
      throw new Error("Error: Instantiation failed: Use LoggingStore.instance instead of new.");
    }
    LoggingStore._instance = this;
  }

  public initialize(appName: string, options: LogOptions) {
    if (!this._applicationName || this._applicationName.length === 0) {
      this._applicationName = appName;
    }
    if(options.appenders && options.appenders.length>0) {
      options.appenders.forEach(appenderOptions=> {
        if(appenderOptions.isDefferred) {
          const instance = AppenderRepository.instance.getAppender(appenderOptions.name);
          const delay = options.logInterval || 10000;
          this.defLogWriter = this.defLogWriter || LogWriter.getDefferredWriter(delay);
          this.defLogWriter.addAppender(instance.clone(appenderOptions));
        } else {
          const instance = AppenderRepository.instance.getAppender(appenderOptions.name);
          this.immedWriter.addAppender(instance.clone(appenderOptions));
        }
      });
    }
  }
  public enqueue(logEvent: LoggingEvent): void {
    logEvent.appName = this._applicationName;
    this.immedWriter.addLogEntry(logEvent);
    if(this.defLogWriter) {
      this.defLogWriter.addLogEntry(logEvent);
    }
  }

  public getLogger(name: string, level?: LogLevel): ApplicationLogger {
    if (!this.loggerMap.has(name)) {
      this.loggerMap.set(name, {
        logger: LoggerFactory.instance.getLogger(name),
        level: level
      });
    } else {
      throw new Error(`Logger with the name ${name} already exists`);
    }
    return this.loggerMap.get(name).logger;
  }

  public removeLogger(logger: ApplicationLogger): void {
    if (this.loggerMap.has(logger.name)) {
      this.loggerMap.delete(logger.name);
    }
  }

  static get instance(): LoggingStore {
    return LoggingStore._instance;
  }

}


