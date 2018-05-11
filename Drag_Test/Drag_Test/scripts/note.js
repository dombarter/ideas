var numberOfNotes = 1;
var notes = [false];

for (var a = 1; a <= numberOfNotes; a++) {
    var note = "note-" + a.toString();
    document.getElementById(note).style.zIndex = a;
}

function getXCoordinate() {
    return parseFloat(window.event.clientX);  
}

function getYCoordinate() {
    return parseFloat(window.event.clientY); 
}

function noteSelected(noteNumber) {
    notes[noteNumber - 1] = true;
}

function noteDeselected(noteNumber) {
    notes[noteNumber - 1] = false;
}

function moveNote(noteNumber) {

    if (notes[noteNumber - 1] == true) {

        var note = "note-" + noteNumber;

        var diffX = parseFloat(getXCoordinate() - document.getElementById(note).offsetLeft);
        var diffY = parseFloat(getYCoordinate() - document.getElementById(note).offsetTop);
     
        var newX = getXCoordinate() - diffX;
        var newY = getYCoordinate() - diffY;

        alert("X: " + getXCoordinate() + "\n" + "Y: " + getYCoordinate() + "\ndiffX: " + diffX + "\ndiffY: " + diffY + "\nnewX: " + newX + "\nnewY: " + newY);

        //document.getElementById(note).style.top = (getYCoordinate() - diffY) + "px";
        //document.getElementById(note).style.left = (getXCoordinate() - diffX) + "px";
    }
}




