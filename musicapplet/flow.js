const VF = Vex.Flow;

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
	const shuffledVoices = shuffledNumbers.map(a => a.tone);
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML = shuffledNumbers[n].number;
	}
	
	var system = vf.System({x: 110, y: 40, width: 475});
	system.addStave({
	voices: [
		score.voice(score.notes(shuffledVoices, {stem: 'up'}))
	]
	});
	
	vf.draw();
	return shuffledNumbers;
}
printNumbers();


var vf = new VF.Factory({
  renderer: {elementId: 'row', width: 590, height: 160}
});

var score = vf.EasyScore();
score.set({time: "12/4"})

var system2 = vf.System({x: 5, y: 40, width: 105});
var system = vf.System({x: 110, y: 40, width: 475});

system.addStave({
	voices: [
		score.voice(score.notes(shuffledVoices, {stem: 'up'}))
	]
});
system2.addStave({
	voices: [
		score.voice(score.notes('B4/w/r., B4/w/r.', {stem: 'up'}))
	]
}).addClef('treble');

vf.draw();