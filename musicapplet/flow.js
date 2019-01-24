var numbers = [
	{number:1, tone:"", accidental: 0},
	{number:2, tone:"", accidental: 0},
	{number:3, tone:"", accidental: 1},
	{number:4, tone:"", accidental: 0},
	{number:5, tone:"", accidental: 1},
	{number:6, tone:"", accidental: 0},
	{number:7, tone:"", accidental: 1},
	{number:8, tone:"", accidental: 0},
	{number:9, tone:"", accidental: 0},
	{number:10, tone:"", accidental: 1},
	{number:11, tone:"", accidental: 0},
	{number:12, tone:"", accidental: 1}
];

var n;

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function printNumbers() {
	shuffledNumbers = Shuffle(numbers);
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML = shuffledNumbers[n].number;
	}
	return shuffledNumbers;
}


const VF = Vex.Flow;

var vf = new VF.Factory({
  renderer: {elementId: 'row', width: 590, height: 160}
});

var score = vf.EasyScore();
var system = vf.System();

system.addStave({
  voices: [
    score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4');

vf.draw();