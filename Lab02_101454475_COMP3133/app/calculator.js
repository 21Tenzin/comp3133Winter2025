exports.add = function(i, j) {
	return i + j;
};

exports.mul = function(i, j) {
	return i * j;
};

exports.div = function(i, j) {
	if (j == 0) {
		return 'Error: Division by zero';
	}
	return i / j;
};

exports.sub = function(i, j) {
	return i - j;
};