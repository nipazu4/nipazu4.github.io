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

var e = 'new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" })';
var f = 'new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" })';
var f# = 'new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#"))';
var g = 'new VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" })';
var g# = 'new VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#"))';

var notes = [
    e,
    f,
    f#,
    g,
    g#,
    new VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }),
    new VF.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
    new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "q" }),
    new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),
    new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#")),
    new VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }),
    new VF.StaveNote({clef: "treble", keys: ["d/5"], duration: "q" }).addAccidental(0, new VF.Accidental("#"))
]

var voice = new VF.Voice({num_beats: 12,  beat_value: 4});
voice.addTickables(notes);

//Format and justify notes to 475 pixels
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 475);

// Render voice
voice.draw(context, stave2);