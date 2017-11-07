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
      update(appenderOptions: AppenderOptions) : void {
        this.options = appenderOptions;
      }
}
