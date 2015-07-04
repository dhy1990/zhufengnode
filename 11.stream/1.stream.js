var fs = require('fs');
var rs = fs.createReadStream('./msg.txt');
rs.on('open',function(){
    console.log('文件打开了')
});
rs.on('data',function(data){
    console.log('读到了数据',data.toString());
})
rs.on('end',function(){
    console.log('文件关闭了')
})