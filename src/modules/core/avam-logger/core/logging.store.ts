import { LogLevel, LogOptions } from "./logging.models";
import { LoggingEvent } from './log-event';
import { LoggerAdapter } from './logger.impl';
import { LoggerFactory } from './logger.factory';
import { ApplicationLogger } from "./logger.interface";
import { } from "./logger.impl";
import { Appender } from "./log.appender";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import { Subscription } from "rxjs/Subscription";

class LogWriter {
  private appName: string;
  private appenders: Map<string, Appender> = new Map<string, Appender>();
  private queue: LoggingEvent[] = [];
  private loggingInterval: number = 5000;
  private logIntervalSubscription: Subscription;


  constructor() {
    this.start();
  }

  addAppender(appender: Appender): void {
    if (!this.appenders.has(appender.name)) {
      this.appenders.set(appender.name, appender);
    }
  }
  set logInterval(value: number) {
    this.loggingInterval = value;
    this.start();
  }
  addLogEntry(logEvent: LoggingEvent) {
    this.queue.push(logEvent);
  }
  flush() {
    if (this.logIntervalSubscription && !this.logIntervalSubscription.closed) {
      this.logIntervalSubscription.unsubscribe();
    }
    this.writeLogEntries();
  }


  private start() {
    if (this.logIntervalSubscription && !this.logIntervalSubscription.closed) {
      this.logIntervalSubscription.unsubscribe();
    }
    this.logIntervalSubscription = Observable.interval(this.loggingInterval).subscribe(this.writeLogEntries.bind(this));
  }
  private writeLogEntries() {
    if (this.queue.length > 0) {
      this.appenders.forEach((value, key) => {
        value.writeLog(this.queue);
        this.queue = [];
      });
    }
  }
}

export class LoggingStore {
  private static _instance = new LoggingStore();
  private loggerMap: Map<string, ApplicationLogger> = new Map<string, ApplicationLogger>();
  private logWriter = new LogWriter();

  constructor() {
    if (LoggingStore._instance) {
      throw new Error("Error: Instantiation failed: Use LoggingStore.instance instead of new.");
    }
    LoggingStore._instance = this;
  }

  public initialize(appName: string, options: LogOptions) {

  }

  public enqueue(logEvent: LoggingEvent): void {
    this.logWriter.addLogEntry(logEvent);
  }

  public getLogger(name: string, level: LogLevel): ApplicationLogger {
    if (!this.loggerMap.has(name)) {
      this.loggerMap.set(name, LoggerFactory.instance.getLogger(name));
    }
    return this.loggerMap.get(name);
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


