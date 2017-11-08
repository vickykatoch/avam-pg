if (!window) {
  var connnections = 0;

  self.addEventListener("connect", (evt: MessageEvent) => {
    debugger;
    console.log(this);
    console.log(self);
    var port: MessagePort = evt.ports[0];
    connnections++;
    port.addEventListener("message", (e: MessageEvent) => {
      console.log(e.data);
    }, false);
    port.start();
    port.postMessage({ type: 'WORKER_CONNECTED' });
    console.log(`Connections Count : ${connnections}`);
  }, false);

}
