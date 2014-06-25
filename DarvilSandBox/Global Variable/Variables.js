function person(knowledge){
	this.knowledge=knowledge
}

function start(){
	var parker = new person(10)

	document.querySelector('#inventory').innerHTML = "<p>Knowledge: " + parker.knowledge + "</p>"
	var options = document.querySelector('#options')
	var aButton = document.querySelector('#startButton')
	aButton.onclick= function(){
		parker.knowledge += 10
		document.querySelector('#inventory').innerHTML = "<p>Knowledge: " + parker.knowledge + "</p>"
	}
	aButton.innerHTML="Graduate"

	var dropOut = document.createElement("button")
	dropOut.innerHTML="Drop Out"
	dropOut.onclick=function(){
		alert("What are you stupid?")
	}
	options.appendChild(dropOut)
}