// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of 
// the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because 
// the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of 
// the letters in "line" are present in "Alien".

function mutation(arr) {
    var first_str = arr[0].toLowerCase();
    var sorted_first_array = first_str.split("");
    var sorted_lc_first_str = sorted_first_array.sort();
    var lc_first_str = sorted_lc_first_str.join("");

    var second_str = arr[1].toLowerCase();
    var sorted_second_array = second_str.split("");
    var sorted_lc_second_str = sorted_second_array.sort();
    var lc_second_str = sorted_lc_second_str.join("");

	for (var i = 0; i<lc_second_str.length; i++) {
		if (lc_first_str.indexOf(lc_second_str[i])==-1) {
			return false;
		}
	} return true;
}

mutation(["fzloor", "for"]);