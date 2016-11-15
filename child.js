var fn_map_obj = require('./event.map.js')
process.on('message', function (m) {

	var flag = m.flag.split('___')[0];
	var fn = fn_map_obj[flag];
	fn(m.data, function(err, data){
		process.send({flag: m.flag, data: data, error: err})	
	})
	
})
