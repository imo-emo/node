const eventEmitter = require("events").EventEmitter;
const event = new eventEmitter();
//1. on 定义监听事件
//2. emit触发监听事件
//3. addListener 添加监听事件
//4. removeListener 删除监听事件
// event.on("someEvent",(arg)=>{
//     console.log("event",arg);
// })
// event.addListener("someEvent",(arg)=>{
//     console.log(`then ${arg+1}`);
// })
// let i = 0;
// setInterval(()=>{
//     i++;
//     event.emit("someEvent",i);
// },1000)
// error
