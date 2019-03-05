function isEmpty(obj) {
	var count = 0;
	for(var key in obj){
		count++;
	}
	if(count == 0){
		return true
	}else{
		return false 
	};
}
var t1 = {};
var t2 = {prop:'Ann'};
alert(isEmpty(t1));
alert(isEmpty(t2));
