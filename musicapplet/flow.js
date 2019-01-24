var numbers = [
	{number:1, tone:'["e/4"]', accidental: 0},
	{number:2, tone:'["f/4"]', accidental: 0},
	{number:3, tone:'["f/4"]', accidental: 1},
	{number:4, tone:'["g/4"]', accidental: 0},
	{number:5, tone:'["g/4"]', accidental: 1},
	{number:6, tone:'["a/4"]', accidental: 0},
	{number:7, tone:'["a/4"]', accidental: 1},
	{number:8, tone:'["b/4"]', accidental: 0},
	{number:9, tone:'["c/4"]', accidental: 0},
	{number:10, tone:'["c/4"]', accidental: 1},
	{number:11, tone:'["d/4"]', accidental: 0},
	{number:12, tone:'["d/4"]', accidental: 1}
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

// We created an object to store the information about the workspace
var WorkspaceInformation = {
    // The <div> element in which you're going to work
    div: document.getElementById("row"),
    // Vex creates a svg with specific dimensions
    canvasWidth: 590,
    canvasHeight: 160
};

// Create a renderer with SVG
var renderer = new VF.Renderer(
    WorkspaceInformation.div,
    VF.Renderer.Backends.SVG
);

// Use the renderer to give the dimensions to the canvas
renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

// Expose the context of the renderer
var context = renderer.getContext();

// And give some style to our canvas
context.setFont("Lucida Console", 12, "").setBackgroundFillStyle("#eed");


/**
 * Creating a new stave
 */
// Create a stave of width 400 at position x10, y40 on the canvas.
var stave = new VF.Stave(5, 40, 105);
var stave2 = new VF.Stave(110, 40, 475);

// Add a clef and time signature.
stave.addClef("treble");
// Set the context of the stave our previous exposed context and execute the method draw !
stave.setContext(context).draw();
stave2.setContext(context).draw();

printNumbers();

var notes = [
	new VF.StaveNote({clef: "treble", keys: shuffledNumbers[0].tone, duration: "q" })
];

var voice = new VF.Voice({num_beats: 12,  beat_value: 4});
voice.addTickables(notes);

//Format and justify notes to 475 pixels
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 475);

// Render voice
voice.draw(context, stave2);

