var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	setNew();			// need to add new created list item to the click action
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


//-------------------------------------------------------------------------------------
var listItem = document.querySelectorAll("li");
var ul = document.querySelectorAll("ul")[0];

function done(){							//function switching on/off EXACT item that is clicked 
	this.classList.toggle("done");	
}

function meRemove(){
	this.previousSibling.remove() + this.previousSibling.remove()+ this.remove(); // remove list item, div, delete button itself
}

function setNew(){							// setting up parameters for new list item
	var newLi = ul.lastChild;
	newLi.addEventListener("click", done);
	newLi.insertAdjacentHTML("afterend", "<button>Delete</button>");	
	newLi.nextElementSibling.style.display = "inline-block"; 
	newLi.style.display = "inline-block";
	newLi.style.width = "100px";
	newLi.insertAdjacentHTML("beforebegin", "<div></div>");
	deleteMe();
}


listItem.forEach(function(whichLi) {    		// looping through element items and onclick doing function
	whichLi.addEventListener("click", done);   
})       

listItem.forEach(function(listItem){		// looping through list to add delete button to every list item
	listItem.insertAdjacentHTML("afterend", "<button>Delete</button>");	
})
	
listItem.forEach(function(listItem){	// looping through list and setting up style for buttons: inline-block
	listItem.nextElementSibling.style.display = "inline-block";  
})

listItem.forEach(function(listItem){		// looping through list and making all li as inline blocks, to get button next to it
	listItem.style.display = "inline-block";
	listItem.style.width = "100px";	
})

listItem.forEach(function(listItem){		// looping through list to create div infront of list
	listItem.insertAdjacentHTML("beforebegin", "<div></div>");	
})

function deleteMe(){								//if clicking on delete do function meRemove
	var button = ul.querySelectorAll("button");
	button.forEach(function(button){				
		button.addEventListener("click", meRemove);
	})
	
}

deleteMe(); // running function straight away to make sure that old item in the list also will get this remove funtion