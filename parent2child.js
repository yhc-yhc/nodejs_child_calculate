
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0);

var cp = require('child_process');
var childs = [], flag_obj = {}; 

var process_num = process.env.process_num || 3;
for(var i=0; i<process_num; i++){
	var child = cp.fork('./child.js');
	child.on('message', function(m){
		//console.log(m)
		var pid = m.pid;
		var respose_child = childs.filter(function(e, i, a){
			return e.pid == pid;
		})[0];
		respose_child.busy--;
		delete flag_obj[m.flag];
		ev.emit(m.flag, m.error, m.data)
	})
	child.busy = 0;
	childs.push(child);
}

function getMostFreeChild(){
	return childs.sort(function(c, p){
		return c.busy - p.busy
	})[0];
}

module.exports = function(opt, fn){
	var _flag = opt.flag;
	var data = opt.data;
	var flag = _flag + '___' + JSON.stringify(data)

	if(!flag_obj[flag]){
		flag_obj[flag] = 1;
		var child = getMostFreeChild();
		child.busy ++ ;
		child.send({flag: flag, data: data});
	}
	
	ev.once(flag, function(err, data){
		fn(err, data)
	})
}

