function titleCase(str) {
    var str_in_array = str.split(" ");
    console.log(str_in_array);
    var final_array = [];
    var new_array = str_in_array.map(function(i) {
		var final_section = i.substr(1);
        final_array.push((i[0].toUpperCase()) + (final_section.toLowerCase()));
    });
    return final_array.join(" ");

}

titleCase("I'm a little tea pot");