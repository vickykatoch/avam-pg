import { LoggingEvent } from "./log-event";

export interface Appender {
  name: string;
  writeLog(loggingEvent: LoggingEvent[]) : void;
}
