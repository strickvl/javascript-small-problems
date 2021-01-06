function findLongestWord(str) {
    var str_in_array = str.split(" ");
	console.log(str_in_array);
	var current_longest = 0;
	var new_array = str_in_array.map(function(i) {
		if (i.length>current_longest) {
			current_longest = i.length;
        }
    });
    return current_longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
