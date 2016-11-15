var _obj = {};
_obj.add = function (arg, fn) {
	setTimeout(function(){
		var rs = arg + arg;
		fn(null, rs)
	}, arg*1000)
}

_obj.multi = function (arg, fn) {
	setTimeout(function(){
		var rs = arg * arg;
		fn(null, rs)
	}, arg*1500)
}

for(var key in _obj){
	var _key = String(key).toUpperCase()
	exports[key] = _key;
	exports[_key] = _obj[key]
}
