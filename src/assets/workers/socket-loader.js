(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var connnections = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LWxvYWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9jb3JlL2ZsY24td29ya2Vycy9sb2dnZXIuc2hhcmVkLXdvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGNvbm5uZWN0aW9ucyA9IDA7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldnQgOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgIHZhciBwb3J0IDogTWVzc2FnZVBvcnQgPSBldnQucG9ydHNbMF07XHJcbiAgICBjb25ubmVjdGlvbnMrKztcclxuICAgIHBvcnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgcG9ydC5zdGFydCgpO1xyXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7dHlwZSA6ICdXT1JLRVJfQ09OTkVDVEVEJ30pO1xyXG4gICAgY29uc29sZS5sb2coYENvbm5lY3Rpb25zIENvdW50IDogJHtjb25ubmVjdGlvbnN9YCk7XHJcbiAgfSwgZmFsc2UpO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFrQjtJQUNoRCxJQUFJLElBQUksR0FBaUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxZQUFZLEVBQUUsQ0FBQztJQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFlO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixZQUFZLEVBQUUsQ0FBQyxDQUFDO0NBQ3BELEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7In0=
