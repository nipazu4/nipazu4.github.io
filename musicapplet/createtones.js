var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var n;

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function printNumbers() {
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML += "<span>" + shuffle(numbers)[n] + "</span>";
	}
	
}