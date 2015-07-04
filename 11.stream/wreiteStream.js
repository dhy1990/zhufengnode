var fs = require('fs');
var rs = fs.createReadStream('./test');
var ws = fs.createWriteStream('./test1')
rs.on('open',function(){
    console.log('文件打开')
})
rs.on('data',function(data){
    ws.write(data);
});
rs.on('end',function(){
    console.log('文件关闭')
    ws.end();
});