import { AppenderOptions } from './logging.models';
import { LoggingEvent } from "./log-event";

export interface Appender {
  name: string;
  writeLog(loggingEvent: LoggingEvent) : void;
  writeLogs(loggingEvent: LoggingEvent[]) : void;
  update(appenderOptions: AppenderOptions) : void;
}
