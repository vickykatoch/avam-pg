import { LogLevel } from './logging.models';

export class LoggingEvent {
  appName : string;
  name : string;
  groupName : string;
  timestamp : number;
  level : LogLevel;
  message: string;
}
