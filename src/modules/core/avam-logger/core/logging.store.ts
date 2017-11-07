import { AppenderRepository } from './appender-repository';
import { LogLevel, LogOptions, LoggerStaticInfo } from "./logging.models";
import { LoggingEvent } from './log-event';
import { Appender } from "./log.appender";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import { Subscription } from "rxjs/Subscription";
import { LogWriter } from '@avam-logger/core/log-writer';




export class LoggingStore {
  private static _instance = new LoggingStore();
  private immedWriter = LogWriter.getImmediateLogWriter();
  private defLogWriter : LogWriter;
  private _staticInfo: LoggerStaticInfo = { appName : "" };


  constructor() {
    if (LoggingStore._instance) {
      throw new Error("Error: Instantiation failed: Use LoggingStore.instance instead of new.");
    }
    LoggingStore._instance = this;
  }

  public initialize(loggerStaticInfo: LoggerStaticInfo, options?: LogOptions) {
    this.resolveStaticInfo(loggerStaticInfo);
    if(options && options.appenders && options.appenders.length>0) {
      options.appenders.forEach(appenderOptions=> {
        if(appenderOptions.isDefferred) {
          const appender = AppenderRepository.instance.getAppender(appenderOptions.name);
          const delay = options.logInterval || 10000;
          this.defLogWriter = this.defLogWriter || LogWriter.getDefferredWriter(delay);
          appender.update(appenderOptions);
          this.defLogWriter.addAppender(appender);
        } else {
          const appender = AppenderRepository.instance.getAppender(appenderOptions.name);
          appender.update(appenderOptions);
          this.immedWriter.addAppender(appender);
        }
      });
    }
  }
  public enqueue(logEvent: LoggingEvent): void {
    logEvent.appName = this._staticInfo.appName;
    logEvent.user = this._staticInfo.user;
    logEvent.region = this._staticInfo.region;
    logEvent.env = this._staticInfo.env;

    this.immedWriter.addLogEntry(logEvent);
    if(this.defLogWriter) {
      this.defLogWriter.addLogEntry(logEvent);
    }
  }

  private resolveStaticInfo(staticInfo : LoggerStaticInfo) {
    this._staticInfo.appName = this._staticInfo.appName || staticInfo.appName;
    this._staticInfo.user = this._staticInfo.user || staticInfo.user;
    this._staticInfo.env = this._staticInfo.env || staticInfo.env;
    this._staticInfo.region = this._staticInfo.region || staticInfo.region;
  }
  static get instance(): LoggingStore {
    return LoggingStore._instance;
  }
}


