var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var n;

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function printNumbers() {
	var shuffledNumbers = Shuffle(numbers);
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML = shuffledNumbers[n];
	}
}

