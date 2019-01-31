var rhythmValues =	[
	{duration: 1, rhythm: "z"},
	{duration: 2, rhythm: "z2"},
	{duration: 3, rhythm: "z3"},
	{duration: 4, rhythm: "z4"},
	{duration: 5, rhythm: "z5"},
	{duration: 6, rhythm: "z6"},
	{duration: 7, rhythm: "z7"},
	{duration: 8, rhythm: "z8"},
	{duration: 9, rhythm: "z9"},
	{duration: 10, rhythm: "z10"},
	{duration: 11, rhythm: "z11"},
	{duration: 12, rhythm: "z12"},
	{duration: 13, rhythm: "z13"},
	{duration: 14, rhythm: "z14"},
	{duration: 15, rhythm: "z15"},
	{duration: 16, rhythm: "z16"},
	
	{duration: 1, rhythm: "A"},
	{duration: 2, rhythm: "A2"},
	{duration: 3, rhythm: "A3"},
	{duration: 4, rhythm: "A4"},
	{duration: 5, rhythm: "A5"},
	{duration: 6, rhythm: "A6"},
	{duration: 7, rhythm: "A7"},
	{duration: 8, rhythm: "A8"},
	{duration: 9, rhythm: "A9"},
	{duration: 10, rhythm: "A10"},
	{duration: 11, rhythm: "A11"},
	{duration: 12, rhythm: "A12"},
	{duration: 13, rhythm: "A13"},
	{duration: 14, rhythm: "A14"},
	{duration: 15, rhythm: "A15"},
	{duration: 16, rhythm: "A16"}
];

function Shuffle(o)	{
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var amountOfNotes = //?

//L = 1/16
function createRhythm()	{
	shuffledValues = Shuffle(rhythmValues);
	
	
	for(i = 0; i < amountOfNotes; i++)	{
		
		
	}
}