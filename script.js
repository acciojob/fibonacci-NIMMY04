function fibonacci(num) {
let num1 = 0;
let num2 = 1;
let sum;
	if(num===1){
		return num1;
	}else if(num===2){
		return num2;
	}else{
		for(let i=0;i<num-2;i++){
		sum = num1 + num2
		num1 = num2;
		num2 = sum;
		}
	return num2;
	}
}

module.exports = fibonacci;
