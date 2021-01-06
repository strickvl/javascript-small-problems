function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function rot13(str) { // LBH QVQ VG!
    var string="";
	var finalstring=[];
	for (var i=0; i<str.length; i+=1) {
		if ((isLetter(str[i]))===null) {
			finalstring.push(str[i]);
		} else if ((str.charCodeAt(i))>77) {
			string = string + (str.charCodeAt(i)-13)+",";
			console.log(String.fromCharCode(str.charCodeAt(i)-13));
			finalstring.push(String.fromCharCode(str.charCodeAt(i)-13));
		} else {
			string = string + (str.charCodeAt(i)+13)+",";
			console.log(String.fromCharCode(str.charCodeAt(i)+13));
			finalstring.push(String.fromCharCode(str.charCodeAt(i)+13));
		}
		
	} return(finalstring.join(""));
}
	

// Change the inputs below to test
rot13("SERR PBQR PNZC");