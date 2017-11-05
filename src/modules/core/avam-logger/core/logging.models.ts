export enum LogLevel {
  ALL = 0,
  TRACE = 1,
  DEBUG = 2,
  INFO = 3,
  WARN =4,
  ERROR = 5,
  FATAL = 6,
  OFF =7
}
export interface LogOptions {
  appLogLevel : LogLevel;
  forcedLogLevel? : LogLevel;
  appenders : string[];
  logServer? : any;
}


