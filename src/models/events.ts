export interface IEmitter {
  eventList: {
    type: keyof HTMLElementEventMap;
    action: () => any;
  }[];
}