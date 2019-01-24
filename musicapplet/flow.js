var numbers = [
	{number:1, tone:'"e/4"', accidental: 0},
	{number:2, tone:'"f/4"', accidental: 0},
	{number:3, tone:'"f/4"', accidental: 1},
	{number:4, tone:'"g/4"', accidental: 0},
	{number:5, tone:'"g/4"', accidental: 1},
	{number:6, tone:'"a/4"', accidental: 0},
	{number:7, tone:'"a/4"', accidental: 1},
	{number:8, tone:'"b/4"', accidental: 0},
	{number:9, tone:'"c/4"', accidental: 0},
	{number:10, tone:'"c/4"', accidental: 1},
	{number:11, tone:'"d/4"', accidental: 0},
	{number:12, tone:'"d/4"', accidental: 1}
];

/*.addAccidental(0, new VF.Accidental("#"))*/

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


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var vf = new Vex.Flow.Factory({
    renderer: {
        selector: 'row',
        height: 160,
        width: 590
    }
});

var score = vf.EasyScore();
var system = vf.System();

system.addStave({
    voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {
            stem: 'up'
        })),
        score.voice(score.notes('C#4/h, C#4', {
            stem: 'down'
        }))
    ]
}).addClef('treble').addTimeSignature('4/4');

system.addConnector();

system.addStave({
    voices: [
        score.voice(score.notes('C#3/q, B2, A2/8, B2, C#3, D3', {
            clef: 'bass',
            stem: 'up'
        })),
        score.voice(score.notes('C#2/h, C#2', {
            clef: 'bass',
            stem: 'down'
        }))
    ]
}).addClef('bass').addTimeSignature('4/4');

vf.draw();