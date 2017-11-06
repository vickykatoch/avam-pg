import { Appender } from './log.appender';
import { LoggingEvent } from './log-event';
import { AppenderOptions } from './logging.models';



export class WebWorkerAppender implements Appender {

  constructor(private options: AppenderOptions) {

  }

  get name(): string {
    return 'worker';
  }
  writeLog(loggingEvent: LoggingEvent): void {
    throw new Error("Method not implemented.");
  }
  writeLogs(loggingEvent: LoggingEvent[]): void {
    throw new Error("Method not implemented.");
  }
  clone(options: AppenderOptions): Appender {
    return new WebWorkerAppender(options);
  }
  getFormattedMessage(loggingEvent: LoggingEvent): string {
    throw new Error("Method not implemented.");
  }

}
