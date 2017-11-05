import { LogLevel } from './logging.models';
import { ApplicationLogger } from "./logger.interface";
import { LoggerAdapter } from "./logger.impl";



export class LoggerFactory {
  private static _instance = new LoggerFactory();

  constructor() {
    if (LoggerFactory._instance) {
      throw new Error("Error: Instantiation failed: Use LoggingStore.instance instead of new.");
    }
    LoggerFactory._instance = this;
  }

  getLogger(name: string, level?: LogLevel) : ApplicationLogger {
    return new LoggerAdapter(name, level);
  }

  static get instance(): LoggerFactory {
    return LoggerFactory._instance;
  }
}
