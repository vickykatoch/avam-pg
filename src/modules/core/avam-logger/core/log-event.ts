import { LogLevel } from './logging.models';

export class LoggingEvent {
  private _messages : any[];

  constructor(name: string, private ts: number,private _level: LogLevel,private exception?: Error, ...msgs :  any[]) {
    this._messages = msgs;
  }

  public get name() : string {
    return this.name;
  }
  public get timeStamp() : number {
    return this.ts;
  }
  public get level() : LogLevel {
    return this._level;
  }
  public get error() : Error {
    return this.exception;
  }
  public get messages() : any[] {
    return this._messages;
  }
}
