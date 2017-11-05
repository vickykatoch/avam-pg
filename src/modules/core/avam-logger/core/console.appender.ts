import { Appender } from "./log.appender";
import { LoggingEvent } from "./log-event";



export class ConsoleAppender implements Appender {
  get name() : string {
    return 'console';
  }

  writeLog(loggingEvent: LoggingEvent[]): void {
    loggingEvent.forEach(logEvent=> {

    });
  }

}
