(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

importScripts('temp.js');
var connnections = 0;
console.log(self);
self.addEventListener("connect", (evt) => {
    var port = evt.ports[0];
    connnections++;
    port.addEventListener("message", (e) => {
        console.log(e.data);
    }, false);
    port.start();
    port.postMessage({ type: 'WORKER_CONNECTED' });
    console.log(`Connections Count : ${connnections}`);
}, false);

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxvZ2dlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9jb3JlL2ZsY24td29ya2Vycy9zaGFyZWQtbG9nZ2VyLndvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRTY3JpcHRzKCd0ZW1wLmpzJyk7XHJcblxyXG52YXIgY29ubm5lY3Rpb25zID0gMDtcclxuY29uc29sZS5sb2coc2VsZik7XHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3RcIiwgKGV2dDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcblxyXG4gIHZhciBwb3J0OiBNZXNzYWdlUG9ydCA9IGV2dC5wb3J0c1swXTtcclxuICBjb25ubmVjdGlvbnMrKztcclxuICBwb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUuZGF0YSk7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIHBvcnQuc3RhcnQoKTtcclxuICBwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1dPUktFUl9DT05ORUNURUQnIH0pO1xyXG4gIGNvbnNvbGUubG9nKGBDb25uZWN0aW9ucyBDb3VudCA6ICR7Y29ubm5lY3Rpb25zfWApO1xyXG59LCBmYWxzZSk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQWlCO0lBRWpELElBQUksSUFBSSxHQUFnQixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLFlBQVksRUFBRSxDQUFDO0lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQWU7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLFlBQVksRUFBRSxDQUFDLENBQUM7Q0FDcEQsRUFBRSxLQUFLLENBQUMsQ0FBQzs7OzsifQ==
