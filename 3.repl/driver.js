/**
 * 事件驱动
 * $('#btn').click(function(){
 *  alert('aa');
 * })
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){

     console.time('label');
    for(var i=0; i<1000000000; i++){

    }
    console.timeEnd('label');
    res.write('hello');
    res.end('over')
});
server.listen(8080);



