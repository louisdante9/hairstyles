function findIndex (arr, callback) {
	for(i =0; i < arr.length; i++) {
	if(callback(arr[i], i, arr)){
	return i
    }
  
}
return -1
}

findIndex([2,3,4], function(ele){
  return ele === 3
})