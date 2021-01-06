// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and 
// returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var final_array = [];
	var arr_length = arr.length;
    var start_number = 0;
    var new_sub_array = [];
	for (var i = 1; i<=arr_length; i=i+size) {
		new_slice = arr.slice(start_number,start_number+size);
		new_sub_array.push(new_slice);
        start_number = start_number + size;
	}
    return new_sub_array;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
