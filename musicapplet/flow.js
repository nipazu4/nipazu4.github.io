var numbers = [
	{number:1, tone:'VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" })'},
	{number:2, tone:'VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" })'},
	{number:3, tone:'VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" })'},
	{number:4, tone:'VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" })'},
	{number:5, tone:'VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" })'},
	{number:6, tone:'VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" })'},
	{number:7, tone:'VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" })'},
	{number:8, tone:'VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "q" })'},
	{number:9, tone:'VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" })'},
	{number:10, tone:'VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" })'},
	{number:11, tone:'VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" })'},
	{number:12, tone:'VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" })'}
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

var notenames = [
	VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }),
	VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#"))
]

var result = [];
for(var i = 0; i < shuffledNumbers.length; i++) {
    result[i] = notenames[shuffledNumbers[i]];
}

var notes = [
    new shuffledNumbers[0].tone
];

var voice = new VF.Voice({num_beats: 12,  beat_value: 4});
voice.addTickables(notes);

//Format and justify notes to 475 pixels
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 475);

// Render voice
voice.draw(context, stave2);

