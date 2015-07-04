var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var os = require('os');
var RETURN_FLAG = os.EOL;

function LineReader(path){
    this._rs = fs.createReadStream(path,'r');
}
util.inherits(LineReader,EventEmitter);
LineReader.prototype.on('newListener',function(eventName){
    if(eventName =='newLine'){
        var line =[];
        var self = this;
        this._rs.on('readable',function(){
            var ch;
            while(null != (ch = this.read(RETURN_FLAG.length))){
                if(ch[0] = RETURN_FLAG){
                    self.emit('newLine',Buffer.concat(line).toString());
                    line =[];
                }else{
                    line.push(ch);
                }
            }
        });
        this._rs.on('end',function(){
            self.emit('newLine',Buffer.concat(line).toString());
            self.emit('end');
        })
    }
});
var obj = new LineReader('./test');
obj.on('newLine',function(data){
    console.log(data);
});