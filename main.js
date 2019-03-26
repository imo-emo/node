const events = require("events");
let eventEmiter = new events.EventEmitter();
let connectHandle = ()=>{
    console.log("连接成功");
    eventEmiter.emit('data_received');
}
eventEmiter.on("connectHandle",connectHandle);
eventEmiter.on("data_received",()=>{
    console.log("数据接收成功!");
})
eventEmiter.emit('connectHandle');

console.log("程序执行完毕");