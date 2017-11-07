export class WorkerMessage {
  constructor(public type: string, public message : any ) {
  }
}

export enum WorkerMessageType {
  Connected = 0,
  Initialize = 1,
  Log = 2,
}
