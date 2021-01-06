function confirmEnding(str, target) {
	var rollback_number = target.length;
	var final_bit = str.substring(str.length - rollback_number);
	if (final_bit === target) {
		return true;
	} else {
		return false;
	}
}

confirmEnding("Bastian", "n");
