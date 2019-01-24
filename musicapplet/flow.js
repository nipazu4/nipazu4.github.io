var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var n;

VF = Vex.Flow;

var notenames = [
	new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	new VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	new VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
	new VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }),
	new VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#"))
]


function Shuffle(obj1, obj2) {
  var index = obj1.length;
  var rnd, tmp1, tmp2;

  while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp1 = obj1[index];
    tmp2 = obj2[index];
    obj1[index] = obj1[rnd];
    obj2[index] = obj2[rnd];
    obj1[rnd] = tmp1;
    obj2[rnd] = tmp2;
  }
}

function printNumbers() {
	shuffledNumbers = Shuffle(numbers, notenames);
	for (n = 0; n < numbers.length; n++) {
		var elementId = "output" + n;
		document.getElementById(elementId).innerHTML = shuffledNumbers[n];
	}
	return shuffledNumbers;
}


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

var note1 = shuffledNumbers[0];
var note2 = shuffledNumbers[1];
var note3 = shuffledNumbers[2];
var note4 = shuffledNumbers[3];
var note5 = shuffledNumbers[4];
var note6 = shuffledNumbers[5];
var note7 = shuffledNumbers[6];
var note8 = shuffledNumbers[7];
var note9 = shuffledNumbers[8];
var note10 = shuffledNumbers[9];
var note11 = shuffledNumbers[10];
var note12 = shuffledNumbers[11];


var notes = [
    notenames["note1"],
    notenames["note2"],
    notenames[2],
    notenames[3],
    notenames[4],
    notenames[5],
    notenames[6],
    notenames[7],
    notenames[8],
    notenames[9],
    notenames[10],
    notenames[11]
]

var voice = new VF.Voice({num_beats: 12,  beat_value: 4});
voice.addTickables(notes);

//Format and justify notes to 475 pixels
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 475);

// Render voice
voice.draw(context, stave2);

