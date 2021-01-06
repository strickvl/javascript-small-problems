function truncateString(str, num) {
    var dots = "...";
  	if (num<=3) {
		return str.slice(0,num) + dots;
	} else if (str.length>num) {
		return str.slice(0,num-3) + dots;
	} else {
      return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);