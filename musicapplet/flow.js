var numbers = [
	{number:1, tone:"E4"},
	{number:2, tone:"F4"},
	{number:3, tone:"F#4"},
	{number:4, tone:"G4"},
	{number:5, tone:"G#4"},
	{number:6, tone:"A4"},
	{number:7, tone:"A#4"},
	{number:8, tone:"B4"},
	{number:9, tone:"C5"},
	{number:10, tone:"C#5"},
	{number:11, tone:"D5"},
	{number:12, tone:"D#5"}
];

var n;

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function printNumbers() {
	const shuffledNumbers = Shuffle(numbers);
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

var system2 = vf.System({x: 5, y: 40, width: 105});
var system = vf.System({x: 110, y: 40, width: 475});

system.addStave({
	voices: [
		score.voice(score.notes('E4/q, F4, F#4, G4, G#4, A4, A#4, B4, C5, C#5, D5, D#5', {stem: 'up'}), {time: "12/4"})
	]
});
system2.addStave().addClef('treble');

vf.draw();