var child = require('child_process').fork('./child.js');
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0);
child.on('message', function(m){
	console.log(m)
	ev.emit(m.flag, m.data)
})
exports.ev = ev;
exports.child = child;
