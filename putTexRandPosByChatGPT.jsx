(function(){
// Create a new document
var doc = app.documents.add();

// Calculate the coordinates of the center of the document
var x = doc.width / 2;
//var y = doc.height / 2;

// Calculate the radius of the circular path
var radius = x / 2;
// create a circular path
var circlePath = doc.pathItems.ellipse(doc.height, x - radius, radius * 2, radius * 2);
// Set the fill color and stroke color of the circle to be transparent
circlePath.filled = false;
circlePath.stroked = false;

// loop 2000 times to create path text object
for (var i = 0; i < 2000; i++) {
    // create a new path text object
    var pathTextCopy = doc.textFrames.add();

	// Set the contents of the text path object
	pathTextCopy.contents = "2023";

	var aspectRatio = pathTextCopy.width / pathTextCopy.height;
	pathTextCopy.width = Math.random() * 50;
	pathTextCopy.height = pathTextCopy.width / aspectRatio;

	var angle = Math.random() * 360 - 180;
	var distance = Math.random() * (radius * 3) + radius;
    // position the path text object along the circular path
    pathTextCopy.position = circlePath.pathPoints[0].anchor;
    pathTextCopy.position = [circlePath.position[0] + radius + distance * Math.cos(angle) - pathTextCopy.width / 2,
                             circlePath.position[1] - radius + distance * Math.sin(angle) + pathTextCopy.height / 2];
	var my_color = new CMYKColor();
	var randColor = Math.random();
	my_color.cyan   = 0;
	my_color.magenta = 100*randColor;
	my_color.yellow  = 100*randColor;
	my_color.black  = 0;
	pathTextCopy.textRange.characterAttributes.fillColor  = my_color;
}

// Set CMYKColor
var color = new CMYKColor();
color.cyan   = 0;
color.magenta = 100;
color.yellow  = 100;
color.black  = 0;

// Create a text frame for the first line
// Set the string
// Set the text frame position to the center of the circle minus half the width and height of the text frame, respectively
// Set the text color to the specified color stored in color.
var textFrame1 = doc.textFrames.add();
textFrame1.contents = "HAPPY NEW YEAR!";
textFrame1.textRange.characterAttributes.size = 22;
textFrame1.left = circlePath.left + circlePath.width / 2 - textFrame1.width / 2;
textFrame1.top = circlePath.top - circlePath.height / 2 - textFrame1.height;
textFrame1.textRange.characterAttributes.fillColor  = color;


// Create a text frame for the first line
var textFrame2 = doc.textFrames.add();
textFrame2.contents = "Powered by ChatGPT";
textFrame2.textRange.characterAttributes.size = 10;
textFrame2.left = circlePath.left + circlePath.width / 2 - textFrame2.width / 2;
textFrame2.textRange.characterAttributes.fillColor  = color;

// Create a text frame for the first line
var textFrame3 = doc.textFrames.add();
textFrame3.contents = "https://chat.openai.com/chat";
textFrame3.textRange.characterAttributes.size = 7;
textFrame3.left = circlePath.left + circlePath.width / 2 - textFrame3.width / 2;
textFrame3.textRange.characterAttributes.fillColor  = color;

// Place text frame 2 below text frame 1
textFrame2.top = textFrame1.top - 30;

// Place text frame 3 below text frame 2
textFrame3.top = textFrame2.top - 18;

})();