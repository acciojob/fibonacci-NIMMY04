function fibonacci(num) {
let var = 0;
	for(i=0;i<num;i++){
		num = var + num;
		var++;
	}
}

module.exports = fibonacci;
