import { ApplicationLogger } from "./logger.interface";
import { LogLevel } from './logging.models';
import { LoggingEvent } from './log-event';
import { LoggingStore } from './logging.store';

export class LoggerAdapter implements ApplicationLogger {
  private moduleLogLevel: LogLevel;

  constructor(private loggerName: string, private level?: LogLevel) {
    this.moduleLogLevel = level ? level : LogLevel.ALL;
  }

  log(level: LogLevel, params: any[]): void {
    if (level >= this.moduleLogLevel) {
      this.buildLoggingEvent(level, params);
    }
  }
  trace(...messages: any[]): void {
    if (this.moduleLogLevel >= LogLevel.TRACE) {
      this.buildLoggingEvent(LogLevel.TRACE, undefined, messages);
    }
  }
  debug(...messages: any[]): void {
    if (LogLevel.DEBUG >= this.moduleLogLevel) {
      this.buildLoggingEvent(LogLevel.DEBUG, messages);
    }
  }
  info(...messages: any[]): void {
    if (LogLevel.INFO >= this.moduleLogLevel) {
      this.buildLoggingEvent(LogLevel.INFO, messages);
    }
  }
  warn(...messages: any[]): void {
    if (LogLevel.WARN >= this.moduleLogLevel) {
      this.buildLoggingEvent(LogLevel.WARN, messages);
    }
  }
  error(...messages: any[]): void {
    if (LogLevel.ERROR >= this.moduleLogLevel) {
      this.buildLoggingEvent(LogLevel.ERROR, messages);
    }
  }
  fatal(...messages: any[]): void {
    if (LogLevel.FATAL >= this.moduleLogLevel) {
      this.buildLoggingEvent(LogLevel.FATAL, messages);
    }
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


  private buildLoggingEvent(level: LogLevel, ...messages: any[]) {
    const loggingEvent = new LoggingEvent();
    loggingEvent.name = this.name;
    loggingEvent.level = level;
    loggingEvent.timestamp = Date.now();
    loggingEvent.message = this.buildMessage(messages);
    LoggingStore.instance.enqueue(loggingEvent);
  }
  private buildMessage(...messages: any[]): string {
    return messages[0];
  }
}
