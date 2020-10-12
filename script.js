alert("Hello!");

var inputfield = document.getElementById("inputfield")


var pushbutton = document.getElementById("pushbutton")

function clickEventListener() {

	alert("Hello, " + inputfield.value + "!")

	inputfield.value = ""

}

var myVar = "myString";

let myVar2 = 2;





pushbutton.addEventListener("click", clickEventListener)


inputfield.addEventListener("keydown", function(event){
	if (event.code == "Enter") {

		clickEventListener()

	}

})