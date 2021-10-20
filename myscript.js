var myNodelist = document.getElementsByTagName("LI");
var taskcounter = 0;
var finishedtask = 0;
var ongoingtask = 0;
var allhistorytask = 0;
var ongointaskcounter = myNodelist.length;

/////////// 
var tasks = [];
var fLen;

/////RESTORING LIST!//////
function restorelist(){
var storedTasks = JSON.parse(localStorage.getItem("my_tasks"));
console.log(storedTasks);
if(storedTasks == null)
{
	console.log("empty null");
}	

if (storedTasks != null) {
for (let i = 0; i < storedTasks.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("id", "all");
  var inputValue = storedTasks[i];
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
	document.getElementById("myInput").style.backgroundColor = 'white';
	document.getElementById("myInput").value = "";
  checker();
  taskcounter += 1;
  ongoingtask += 1;
  allhistorytask += 1;
  checker();
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  var span1 = document.createElement("SPAN1");
  var txt1 = document.createTextNode("\266");
  span1.className = "primaries";
  span1.appendChild(txt1);
  li.appendChild(span1);
  }
  
    for (i = 0; i < primaries.length; i++) {
    primaries[i].onclick = function() {
      var div = this.parentElement;
      div.style.backgroundColor = "lightgoldenrodyellow";
	  div.id = "Favourite";
	  
    }
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
	  taskcounter -= 1;
	  checker();

    }
  }
  }

} 





///////////

if (myNodelist.length <= 0) {
	document.getElementById("info").innerHTML = "Your list is empty. You can add something by typing thing below.";
}
if (taskcounter <= 0) {
	document.getElementById("counter").innerHTML = "";
	} 


function checker() {
	if (taskcounter <= 0) {
	document.getElementById("info").innerHTML = "Your list is empty. You can add something by typing thing below.";
	document.getElementById("counter").innerHTML = "";
	localStorage.clear();
	} else {
	document.getElementById("info").innerHTML = "Keep updating your list. By clicking the item you can mark it as done, by pressing X button you can delete your task.";
	document.getElementById("counter").innerHTML = "You have " + taskcounter + " tasks on your list.";
	}
}



// Create a "close" button and append it to each list item
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a "close" button and append it to each list item
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\266");
  span1.className = "primaries";
  span1.appendChild(txt1);
  myNodelist[i].appendChild(span1);
}

// Click on a close button to hide the current list item
var primaries = document.getElementsByClassName("primaries");
var i;
for (i = 0; i < primaries.length; i++) {
  primaries[i].onclick = function() {
    var div = this.parentElement;
    div.style.backgroundColor = "lightgoldenrodyellow";
  }
}

function showfavourite() {
	document.getElementById("all").style.display = "none";
}

function showall() {
	document.getElementById("all").style.display = "";
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var itemtype;
  var li = document.createElement("li");
  li.setAttribute("id", "all");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '' || inputValue.length <= 3) {
    alert("Your input is empty or too short");
	document.getElementById("myInput").style.backgroundColor = '#F23D17	';
  } else {
    document.getElementById("myUL").appendChild(li);
	document.getElementById("myInput").style.backgroundColor = 'white';
	document.getElementById("myInput").value = "";
  checker();
  taskcounter += 1;
  ongoingtask += 1;
  allhistorytask += 1;
  checker();
  itemtype = "all";
  console.log(inputValue + " " + itemtype);
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  var span1 = document.createElement("SPAN1");
  var txt1 = document.createTextNode("\266");
  span1.className = "primaries";
  span1.appendChild(txt1);
  li.appendChild(span1);
  }
  
    for (i = 0; i < primaries.length; i++) {
    primaries[i].onclick = function() {
      var div = this.parentElement;
      div.style.backgroundColor = "lightgoldenrodyellow";
	  div.id = "Favourite";
	  
    }
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
	  taskcounter -= 1;
	  checker();

    }
  }
  
  	tasks.push(inputValue);
	localStorage.setItem("my_tasks", JSON.stringify(tasks));
	console.log(tasks);
	
}

function cleartasks(){
	tasks = [];
	storedTasks = [];
	my_tasks = [];
	localStorage.clear();
	console.log("Task storage cleared!");
}
