import { AppenderOptions, LogLevel } from './logging.models';
import { Appender } from "./log.appender";
import { LoggingEvent } from "./log-event";



export class ConsoleAppender implements Appender {
  get name(): string {
    return 'console';
  }
  constructor(private options: AppenderOptions) {

  }

  writeLog(loggingEvent: LoggingEvent): void {
    if (this.options.logLevel !== LogLevel.OFF && loggingEvent.level >= this.options.logLevel) {
      const message = this.getFormattedMessage(loggingEvent);
      switch (loggingEvent.level) {
        case LogLevel.DEBUG:
        case LogLevel.FATAL:
          console.debug(message);
          break;
        case LogLevel.ERROR:
          console.error(message);
          break;
        case LogLevel.INFO:
          console.info(message);
          break;
        default:
          console.info(message);
      }
    }
  }
  writeLogs(loggingEvent: LoggingEvent[]): void {

  }

  update(appenderOptions: AppenderOptions) : void {
    this.options = appenderOptions;
  }

  private getFormattedMessage(loggingEvent: LoggingEvent): string {
    return `[${loggingEvent.appName}-${loggingEvent.name}-${this.getFormattedTime(loggingEvent.timestamp)}] [${loggingEvent.level}] => ${loggingEvent.message}`;
  }
  private getFormattedTime(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString();
  }
}
