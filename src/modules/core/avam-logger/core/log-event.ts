import { LogLevel } from './logging.models';

export class LoggingEvent {
  appName : string;
  user: string;
  region : string;
  env : string;
  name : string;
  groupName : string;
  timestamp : number;
  level : LogLevel;
  message: string;
}
