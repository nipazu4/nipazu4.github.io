var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function printNumbers() {
	document.getElementById("output").innerHTML = shuffle(numbers)[0];
	document.getElementById("output").innerHTML = shuffle(numbers)[1];	
	document.getElementById("output").innerHTML = shuffle(numbers)[2];	
	document.getElementById("output").innerHTML = shuffle(numbers)[3];	
	document.getElementById("output").innerHTML = shuffle(numbers)[4];	
	document.getElementById("output").innerHTML = shuffle(numbers)[5];	
	document.getElementById("output").innerHTML = shuffle(numbers)[6];	
	document.getElementById("output").innerHTML = shuffle(numbers)[7];	
	document.getElementById("output").innerHTML = shuffle(numbers)[8];	
	document.getElementById("output").innerHTML = shuffle(numbers)[9];	
	document.getElementById("output").innerHTML = shuffle(numbers)[10];	
	document.getElementById("output").innerHTML = shuffle(numbers)[11];	
}