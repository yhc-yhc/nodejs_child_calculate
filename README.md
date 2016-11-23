# nodejs_child_calculate

give another way to face high cpu calculate in nodejs

1，在 master2work.js 中 默认创建一个有3个进程的进程池， 这些进程会轮流接受 守护进程（主进程）的命令。

2，在 master.js 中，每次需要子进程计算时，调用下 event.map.js 中的函数名，此函数名对应的是在子进程中进行密集计算的函数。

3, 在 event.map.js 中， 写出需要子进程进行异步计算的函数。

4, 新增功能，会根据works的内存使用量分配任务。

5， 新增功能，如果work正在进行的计算还没有完成，master再分配的相同计算会不会计算，直到work计算完成后，一并给出结果。

==================================================================

        开发主在在 master.js 和 event.map.js 两个文件中更改， master.js主要是正常的 nodejs 进程工作的文件， 需要子进程频繁计算的
    写在 event.map.js 文件中，注意 master.js 中的 flag 和 data 为必传参数， 且 flag 必须和 event.map.js 文件中的函数名 对应。
    
	var m2w = require('./master2work.js')
	var evn = require('./event.map.js')

	function async_like_add(arg, cb){
		setTimeout(function(){
			//console.log(arg, ev)
			var flag = evn.add;
			//console.log(flag)
			var opt = {flag: flag, data: arg}

			m2w(opt, function(err, data){
				cb(err, data)
			})
		}, 1000)
	}

	function async_like_multi(arg, cb){
		setTimeout(function(){
			//console.log(arg, ev)
			var flag = evn.multi;

			var opt = {flag: flag, data: arg}

			m2w(opt, function(err, data){
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

	async_like_multi(7, function(err, data){
		console.log(7, err, data)
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

