var numbers = [
	{number:1, tone:"=E"},
	{number:2, tone:"=F"},
	{number:3, tone:"^F"},
	{number:4, tone:"=G"},
	{number:5, tone:"^G"},
	{number:6, tone:"=A"},
	{number:7, tone:"^A"},
	{number:8, tone:"=B"},
	{number:9, tone:"=c"},
	{number:10, tone:"^c"},
	{number:11, tone:"=d"},
	{number:12, tone:"^d"}
];

for (n = 0; n < numbers.length; n++)	{
	var outputDiv = document.createElement("div");
	outputDiv.className = "numberoutput";
	outputDiv.innerHTML = "x";
	document.getElementById("numbercontainer").appendChild(outputDiv);
}

function Shuffle(o)	{
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function printNumbers()	{
	shuffledNumbers = Shuffle(numbers);
	shuffledVoices = shuffledNumbers.map(a => a.tone);

	var row = document.getElementById("row");
	var notes = 'X: 1\nL: 1/4\n';
	var thingToRemove = document.getElementsByClassName("numberoutput");
	
	while (thingToRemove[0])	{
		thingToRemove[0].parentNode.removeChild(thingToRemove[0])
	}

	for (n = 0; n < numbers.length; n++)	{
		var outputDiv = document.createElement("div");
		outputDiv.className = "numberoutput";
		outputDiv.innerHTML = shuffledNumbers[n].number;
		document.getElementById("numbercontainer").appendChild(outputDiv);
		notes += " " + shuffledVoices[n];
	}
	
	ABCJS.renderAbc(row, notes,
	{
		staffwidth: 590,
		paddingtop: 0,
		paddingbottom: 0,
		paddingright: 5,
		paddingleft: 5,
	});
}