function kitBuilder(containerID,buttonIDs){
	this.kitContainer = document.getElementById(containerID);
	this.bundleButtons = this.getButtons(buttonIDs);
}

kitBuilder.prototype.getButtons = function(buttonIDs) {
	var buttonArr = []
	buttonIDs.forEach(buttonId => {
		buttonArr.push(document.getElementById(buttonId));
	});
	console.log(buttonArr);
	return buttonArr;
}

document.addEventListener( "DOMContentLoaded", function() {
	var kit1 = new kitBuilder("bundle-container1",["bundle-button1","bundle-button2","bundle-button3"]);
});



console.log("test");
