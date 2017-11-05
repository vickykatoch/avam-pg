import { AppenderRepository } from './appender-repository';
import { LogLevel, LogOptions } from "./logging.models";
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
  
  static get instance(): LoggingStore {
    return LoggingStore._instance;
  }
}


