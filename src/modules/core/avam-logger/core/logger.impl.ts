import { ApplicationLogger } from "./logger.interface";
import { LogLevel} from './logging.models';
import { LoggingEvent } from './log-event';
import { LoggingStore } from './logging.store';

export class LoggerAdapter implements ApplicationLogger {
  private defaultLogLevel : LogLevel;

  constructor(private loggerName: string, private level?: LogLevel) {
    this.defaultLogLevel = level ? level : LogLevel.INFO;
  }

  log(level: LogLevel, params: any[]): void {
    this.buildLoggingEvent(level,params);
  }
  trace(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  debug(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.TRACE,messages);
  }
  info(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.TRACE,messages);
  }
  warn(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.TRACE,messages);
  }
  error(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.ERROR,messages);
  }
  fatal(...messages: any[]): void {
    this.buildLoggingEvent(LogLevel.FATAL,messages);
  }
  group(name: string, initiallyExpanded?: boolean): void {
    // this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  groupEnd(): void {
    // this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  time(name: string, level?: LogLevel): void {
    // this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  timeEnd(name: string): void {
    // this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  assert(expr: any): void {
    // this.buildLoggingEvent(LogLevel.TRACE,undefined,messages);
  }
  get name(): string {
      return this.loggerName;
  }


  private buildLoggingEvent(level: LogLevel,...messages: any[]) {
    // const loggingEvent = new LoggingEvent(this.loggerName,Date.now(),level,messages);
    // LoggingStore.instance.enqueue(loggingEvent);
  }
}
