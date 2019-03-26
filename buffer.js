// const buf = Buffer.from('runoob','ascii');
// console.log(buf.toString('base64'));
//创建buffer类
//创建一个长度为10 填充为0的buffer
// let buf1 = Buffer.alloc(10);
// console.log(buf1);
//创建一个长度为10 填充为0的buffer
// let buf = Buffer.alloc(10,1);
// console.log(buf);
//创建一个长度为10，且为初始化的buffer
//这个方法比buffer.alloc更快
//但返回的buffer实例可能包含旧数据
//因此需要使用fill()或write()重写
// const buf = Buffer.allocUnsafe(10);
// console.log(buf);
//创建一个包含[0*1,0*2,0*3]的buffer;
// const buf = Buffer.from([1,2,3]);
// console.log(buf);
//创建一个包含utf-8字节的buffer
// const buf = Buffer.from("test");
// console.log(buf);
//创建一个包含latin1字节的buffer
// const buf = Buffer.from("test",'latin1');
// console.log(buf);
//写入缓冲区
// let buf = Buffer.alloc(256);
// let len = buf.write('www.baidu.com');
// console.log("len:"+len)
//从缓冲区读取数据
// let buf = Buffer.alloc(26);
// for(let i = 0 ;i<20;i++){
//     buf[i] = i+97;
// }
// console.log(buf.toString('utf-8',0,5));