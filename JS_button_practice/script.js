var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//底下是監控 deletEvent
function delete_button(event){
	//兩個要delete, 包含li以及button
	event.target.parentElement.remove();
}
for (var i=0; i<6;i++){
	var button_delete = document.getElementsByClassName("delete")[i];
	button_delete.addEventListener("click", delete_button);
}


//底下是監控 addEvent
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = "Delete";
	btn.addEventListener("click", delete_button);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);