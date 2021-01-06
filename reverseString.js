function reverseString(str) {
  str_in_array = str.split("");
  str_reversed = str_in_array.reverse();
  final_str = str_reversed.join("");
  return final_str;
}

reverseString("hello");
