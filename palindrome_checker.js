function reverseString(str) {
  str_in_array = str.split("");
  str_reversed = str_in_array.reverse();
  final_str = str_reversed.join("");
  return final_str;
}

function palindrome(str) {
    var str_lower_case = str.toLowerCase();
	console.log(str_lower_case);
	var str_without_punctuation = str_lower_case.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	console.log(str_without_punctuation);
	var final_forward_string = str_without_punctuation.replace(/\s/g, '');
	console.log(final_forward_string);
	var backwards_final = reverseString(final_forward_string);
	if (final_forward_string == backwards_final) {
		return true;
	} else {
		return false;
	}
}



palindrome("eye");