var util = require('util');
function Parent(){
    this.name = 'father';
    this.age = 6;
    this.say = function(){
        console.log('hello'+this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name)
};
function Child(){
    this.name = 'child';
    Parent.call(this);
}
util.inherits(Child,Parent);
var p = new Parent();
p.showName();
p.say();
function Person(){
    this.name = 'zfpx';
    this.toString = function(){
        return this.name;
    }
}
var p = new  Person();
console.log(p.toString());
console.log(util.inspect(p,false));
console.log(util.isArray[2,3]);
console.log(util.isRegExp(/dd/));
console.log(util.isDate(new Date()));
console.log(util.isError('err'));
