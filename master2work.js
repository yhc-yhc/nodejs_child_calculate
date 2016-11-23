
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0);

var cp = require('child_process');
var works = [], flag_obj = {}; 

var process_num = process.env.process_num || 3;
for (var i = 0; i < process_num; i++) {
	var work = cp.fork('./work.js');
	work.on('message', function(m) {
		//console.log(m)
		var pid = m.pid;
		var respose_work = works.filter(function(e, i, a){
			return e.pid == pid;
		})[0];
		respose_work.busy --;
		delete flag_obj[m.flag];
		ev.emit(m.flag, m.error, m.data)
	})
	works.push(work);
}

function getMostFreeWork(){
	return works.sort(function(c, p){
		return c.memoryUsage - p.memoryUsage
	})[0];
}

module.exports = function(opt, fn){
	var _flag = opt.flag;
	var data = opt.data;
	var flag = _flag + '___' + JSON.stringify(data)

	if(!flag_obj[flag]){
		flag_obj[flag] = 1;
		var work = getMostFreeWork();
		work.busy ++; 
		work.send({flag: flag, data: data});
	}
	
	ev.once(flag, function(err, data){
		fn(err, data)
	})
}

