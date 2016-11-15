
var child = require('child_process').fork('./child.js');
var events = new require('events')
var ev = new events.EventEmitter()
ev.setMaxListeners(0)

child.on('message', function(m){
	console.log(m)
	ev.emit(m.flag, m.data)
})

function async_like(arg, cb){
	setTimeout(function(){
		//console.log(arg, ev)
		var flag = 'cal'+ arg + Date.now();

		child.send({flag: flag, data: arg})
		ev.once(flag, function(data){
			cb(data)
		})
	}, 1000)
}

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(10, function(data){
	console.log(10, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(2, function(data){
	console.log(2, data)
})

async_like(3, function(data){
	console.log(3, data)
})

async_like(1, function(data){
	console.log(1, data)
})

async_like(3, function(data){
	console.log(3, data)
})

console.log('request finished')

