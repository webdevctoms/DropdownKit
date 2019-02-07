function kitBuilder(containerID,buttonIDs){
	this.kitContainer = document.getElementById(containerID);
	this.bundleButtons = this.getButtons(buttonIDs);
	this.bundleButtons.forEach(button => this.initButtons(button));
}

kitBuilder.prototype.getButtons = function(buttonIDs) {
	var buttonArr = [];
	buttonIDs.forEach(buttonId => {
		buttonArr.push(document.getElementById(buttonId));
	});
	console.log(buttonArr);
	return buttonArr;
}

kitBuilder.prototype.initButtons = function(button){
	console.log("test");
	button.addEventListener("click",function(e){
		this.buttonClicked(e)
	}.bind(this),false);
}

kitBuilder.prototype.buttonClicked = function(event){
	event.stopPropagation();
	event.preventDefault();
	console.log("clicked", event.target);
}

document.addEventListener( "DOMContentLoaded", function() {
	var kit1 = new kitBuilder("bundle-container1",["bundle-button1","bundle-button2","bundle-button3"]);
});

console.log("test");
