function largestOfFour(arr) {
    var largest_one = 0;
    var final_answer = [];
	newArray = arr.map(function(val) {
		val.sort(function(a,b) {
			return b-a;
		});
		final_answer.push(val[0]);
	});
	return final_answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);