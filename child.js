process.on('message', function (m) {
	//console.log(m)
	setTimeout(function(){
		process.send({flag: m.flag, data: m.data*m.data})
	}, m.data*1000)
	
})
