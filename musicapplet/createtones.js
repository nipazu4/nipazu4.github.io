var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var i;

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function printNumbers() {
	for (i = 0; i < numbers.length; i++) {
		document.getElementById("output").innerHTML = "<span>" + shuffle(numbers)[i] + "</span>";
	}
	
}