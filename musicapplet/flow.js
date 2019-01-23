VF = Vex.Flow;

// We created an object to store the information about the workspace
var WorkspaceInformation = {
    // The <canvas> element in which you're going to work
    canvas: document.getElementById("row"),
    // Vex creates a canvas with specific dimensions
    canvasWidth: 590,
    canvasHeight: 160
};

// Create a renderer with Canvas
var renderer = new VF.Renderer(
    WorkspaceInformation.canvas,
    VF.Renderer.Backends.CANVAS
);

// Use the renderer to give the dimensions to the canvas
renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

// Expose the context of the renderer
var context = renderer.getContext();

// And give some style to our canvas
context.setFont("Arial", 12, "").setBackgroundFillStyle("#eed");


/**
 * Creating a new stave
 */
// Create a stave of width 400 at position x10, y40 on the canvas.
var stave = new VF.Stave(10, 40, 590);
// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");
// Set the context of the stave our previous exposed context and execute the method draw !
stave.setContext(context).draw();