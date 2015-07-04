var fs = require('fs');
/*fs.open('./msg.txt','r',function(err,fd){
    console.log(err,fd);
    fs.close(fd);
});
setTimeout(function(){
    fs.open('./msg.txt','r',function(err,fd){
        console.log(err,fd);
    })
},1000)*/
/**
 * 如何分多次读取文件
 * fd, buffer, offset, length, position, callback
 *  fd 文件索引
 *    buffer 把文件内容读到哪个buffer里
 *    offset buffer偏移量 从哪个字节开始写起
 *    length 从文件中读取的字节数
 *    position 文件中读取的开始位置
 * */
/*fs.open('./msg.txt','r',function(err,fd){
    var buffer = new Buffer(12);
    fs.read(fd,buffer,0,6,0,function(err,bytesRead){
       console.log(buffer.slice(0,bytesRead).toString());
        fs.read(fd,buffer,6,6,6,function(err,bytesRead){
            console.log(buffer.toString());
        })
    })
});*/

var fd = fs.openSync('./msg.txt','r');
var buffer = new Buffer(12);
var bytesRead1 = fs.readSync(fd,buffer,0,6,0);
var bytesRead2 = fs.readSync(fd,buffer,6,6,6);
console.log(buffer.slice(0,bytesRead1).toString());
console.log(buffer.slice(6,bytesRead1+bytesRead2).toString());
