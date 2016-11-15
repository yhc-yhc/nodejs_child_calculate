
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0);

var cp = require('child_process');
var childs = [];

var process_num = process.env.process_num || 3;
for(var i=0; i<process_num; i++){
	var child = cp.fork('./child.js');
		child.on('message', function(m){
		//console.log(m)
		ev.emit(m.flag, m.error, m.data)
	})
	childs.push(child);
}

module.exports = function(opt, fn){
	var _flag = opt.flag;
	var data = opt.data;
	var flag = _flag + '___' + JSON.stringify(data)
	var child = childs.shift();
	child.send({flag: flag, data: data});
	childs.push(child)
	ev.once(flag, function(err, data){
		fn(err, data)
	})
}

