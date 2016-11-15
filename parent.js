
var p2c = require('./parent2child.js')
var evn = require('./event.map.js')

function async_like_add(arg, cb){
	setTimeout(function(){
		//console.log(arg, ev)
		var flag = evn.add;
		//console.log(flag)
		var opt = {flag: flag, data: arg}

		p2c(opt, function(err, data){
			cb(err, data)
		})
	}, 1000)
}

function async_like_multi(arg, cb){
	setTimeout(function(){
		//console.log(arg, ev)
		var flag = evn.multi;

		var opt = {flag: flag, data: arg}

		p2c(opt, function(err, data){
			cb(err, data)
		})
	}, 1000)
}

async_like_add(10, function(err, data){
	console.log(10, err, data)
})

async_like_add(1, function(err, data){
	console.log(1, err, data)
})

async_like_add(2, function(err, data){
	console.log(2, err, data)
})

async_like_add(3, function(err, data){
	console.log(3, err, data)
})

async_like_add(5, function(err, data){
	console.log(5, err, data)
})

async_like_add(4, function(err, data){
	console.log(4, err, data)
})

async_like_add(6, function(err, data){
	console.log(6, err, data)
})

async_like_add(7, function(err, data){
	console.log(7, err, data)
})

async_like_add(9, function(err, data){
	console.log(9, err, data)
})

async_like_add(8, function(err, data){
	console.log(8, err, data)
})

async_like_multi(10, function(err, data){
	console.log(10, err, data)
})

async_like_multi(1, function(err, data){
	console.log(1, err, data)
})

async_like_multi(2, function(err, data){
	console.log(2, err, data)
})

async_like_multi(3, function(err, data){
	console.log(3, err, data)
})

async_like_multi(5, function(err, data){
	console.log(5, err, data)
})

async_like_multi(4, function(err, data){
	console.log(4, err, data)
})

async_like_multi(6, function(err, data){
	console.log(6, err, data)
})

async_like_multi(7, function(err, data){
	console.log(7, err, data)
})

async_like_multi(9, function(err, data){
	console.log(9, err, data)
})

async_like_multi(8, function(err, data){
	console.log(8, err, data)
})
//console.log(process.pid, process.memoryUsage())

console.log('request finished')

