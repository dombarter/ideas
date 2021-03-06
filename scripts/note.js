﻿function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    var element = elmnt;

    elmnt.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {

        var allNotes = document.getElementsByClassName("note");
        for (var a = 0; a < allNotes.length; a++) {
            allNotes[a].style.zIndex = 1;
        }
        element.style.zIndex = 2;

        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        var allNotes = document.getElementsByClassName("note");
        for (var a = 0; a < allNotes.length; a++) {
            allNotes[a].style.zIndex = 1;
        }
        element.style.zIndex = 2;

        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var numberOfNotes = 1; //total number of notes on the current screen

function addNote() {

/*

    var div = document.createElement("textarea");

    div.classList.add("note");

    div.id = "note-" + (numberOfNotes + 1);

    document.getElementById("noteHolder").appendChild(div);

    numberOfNotes = numberOfNotes + 1; //increasing total number of notes

    dragElement(div); //setting up move handler for the new note

	*/

	console.log(numberOfNotes);

	if(numberOfNotes < 0){
		numberOfNotes = 0;
	}

	if(numberOfNotes == 0)
	{
		console.log("0 notes - reload window")
		window.location.reload(false); 
	}

	var clone = document.getElementById('note-1').cloneNode(true); // "deep" clone

		document.getElementById("noteHolder").appendChild(clone);

		dragElement(clone);
}

function moveFirst()
{
	Clone();
	
	var div = "note-1"

	var list = document.getElementById("noteHolder");

	list.removeChild(list.childNodes[3])

}


function deleteNote() {

    var thisdiv = document.getElementById("note-"+(numberOfNotes));

    var list = document.getElementById("noteHolder");
        
    console.log(list);

    console.log(thisdiv);

    list.removeChild(list.childNodes[4]);  

    //document.getElementById("noteHolder").removeChild();

    numberOfNotes = numberOfNotes - 1;

}

function Clone()
    {
		
		
		var clone = document.getElementById('note-1').cloneNode(true); // "deep" clone

		document.getElementById("noteHolder").appendChild(clone);

		dragElement(clone);
	}
	
	function Delete(button)
    {
		var parent = button.parentNode;
		var grand_father = parent.parentNode;
		grand_father.removeChild(parent);
		numberOfNotes -= 1;	
	}