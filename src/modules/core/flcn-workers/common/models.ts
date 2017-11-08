export interface Message {
  type : string;
  sender : MessageSender;
  payload? : any;
}

export enum MessageSender {
  MAIN_APP = 0,
  MARKET_WATCH = 1,
  MARKET_LADDER = 2,
  BLOTTER = 3
}

export enum MessageType {
  CONNECTED = 0,
  INIT_WORKER = 1,
  LOG = 2
}
