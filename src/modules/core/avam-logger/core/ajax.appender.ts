import { AppenderRepository } from './appender-repository';
import { LoggingEvent } from './log-event';
import { AppenderOptions } from './logging.models';
import { Appender } from './log.appender';


export class AjaxAppender implements Appender {

      constructor(private options: AppenderOptions) {
      }
      get name(): string {
            return 'ajax';
      }
      writeLog(loggingEvent: LoggingEvent): void {
            console.info(JSON.stringify(loggingEvent))
      }
      writeLogs(loggingEvent: LoggingEvent[]): void {
            console.info(JSON.stringify(loggingEvent))
      }
      clone(options: AppenderOptions): Appender {
            return new AjaxAppender(options);
      }
      getFormattedMessage(loggingEvent: LoggingEvent): string {
            throw new Error("Method not implemented.");
      }

}