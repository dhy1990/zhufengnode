function Event(){

}
Event.prototype.addListener = function addListener(type,listener){
    if(typeof listener != 'function'){
        throw TypeError('listener must be a function');
    }
    if(!this._events){
        this._events ={}
    }
    if(this._events[type]){
        this._events[type].push (listener);
    }else{
        this._events[type] = [listener]
    }
};
Event.prototype.emit =function emit(type){
    if(!this._events){
        this._events ={}
    }
    var handler  =this._events[type];
    var arr = new Array(arguments.length -1);
    for(var i=1; i<arguments.length;i++){
        arr[i-1] = arguments[i];
    }
    for(var j=0; j<handler.length;j++){
        handler[j].apply(this,arr);
    }
}
function Girl(){

}
Girl.prototype = new Event();
var girl = new Girl();
function Boy(){

};
var diaosi = new Boy();
diaosi.comfort = function(thing){
    console.log('diaosi:喜欢吗？喜欢咱就多看'+thing+'一会');
}
girl.addListener('看了好久',diaosi.comfort);
girl.emit('看了好久','熊猫');

