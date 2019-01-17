var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var n;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function printNumbers() {
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML += "<span>" + shuffleArray(numbers)[n] + "</span>";
	}
	
}