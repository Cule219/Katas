function comp (array1, array2){
	return array1 && array2
		? array1.sort((a, b) => a - b).join() == array2.sort((a, b) => a - b).map(x ** 2).join()
		: false;
}
