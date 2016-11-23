
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0);

var cp = require('child_process');
var works = [], flag_obj = {}; 

var process_num = process.env.process_num || 3;
for (var i = 0; i < process_num; i++) {
	var work = cp.fork('./work.js');
	work.busy = 0;
	work.memoryUsage = 0;
	work.on('message', function(m) {
		//console.log(m)
		var pid = m.pid;
		var respose_work = works.filter(function(e, i, a){
			return e.pid == pid;
		})[0];

		delete flag_obj[m.flag];
		respose_work.busy --;
		respose_work.memoryUsage = m.memoryUsage;

		// works.forEach(function(e){
		// 	console.log(e.pid, e.memoryUsage, e.busy)
		// })
		ev.emit(m.flag, m.error, m.data)
	})
	works.push(work);
}

function getMostFreeWork(){
	var b = works.every(function(e){
		return e.memoryUsage == 0;
	})

	if (b) {
		return works.sort(function(c, p){
			return (c.busy || 0) - (p.busy || 0)
		})[0];
	} else {
		return works.sort(function(c, p){
			return (c.memoryUsage || 0) - (p.memoryUsage || 0)
		})[0];
	}
}

module.exports = function(opt, fn) {
	var _flag = opt.flag;
	var data = opt.data;
	var flag = _flag + '___' + JSON.stringify(data)

	if (!flag_obj[flag]) {
		flag_obj[flag] = 1;
		var work = getMostFreeWork();
		work.busy ++; 
		//console.log(work.pid, work.busy, work.memoryUsage)
		work.send({flag: flag, data: data});
	}
	
	ev.once(flag, function(err, data){
		fn(err, data)
	})
}

