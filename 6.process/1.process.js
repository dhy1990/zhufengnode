/**
 * 在操作系统中，每个应用程序都是一个进程类的对象
 * process
 * 可以在任何模块中访问
 *
 */
var name = 'zfpx';
console.log(process.pid);
process.stdin.on('data',function(chunk){
   process.stdout.write(chunk)
});
/*
//处理异常  不推荐使用 造成内存泄露
process.on('uncaughtException',function(err){
    console.log(err);
})*/
process.argv.forEach(function(val){
    console.log(val);
});
process.on('SIGTERM',function(){
    console.log('我就不自杀');
});
