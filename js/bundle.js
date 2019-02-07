function kitBuilder(containerID,buttonIDs){
	this.kitContainer = document.getElementById(containerID);
	this.bundleButtons = this.getButtons(buttonIDs);
	this.bundleHeights = this.getHeights();
	this.bundleButtons.forEach(button => this.initButtons(button));
}

kitBuilder.prototype.getHeights = function(){
	var heights = [];
	var bundleContentElements = document.getElementsByClassName("bundle-selector-content");
	for(var i = 0;i < bundleContentElements.length;i++){
		heights.push(bundleContentElements[i].clientHeight);
		bundleContentElements[i].style.height = "0px";
		//bundleContentElements[i].style.display = "none";
	}

	return heights;
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
	button.addEventListener("click",function(e){
		this.buttonClicked(e)
	}.bind(this),false);
}

kitBuilder.prototype.buttonClicked = function(event){
	event.stopPropagation();
	event.preventDefault();
	console.log("clicked", event.currentTarget);
	console.log("next sibling", event.currentTarget.nextElementSibling);
	var optionContent = event.currentTarget.nextElementSibling;
	console.log(optionContent.firstElementChild.style.height);
	if(optionContent.firstElementChild.style.height === "0px"){
		var bundleId = event.currentTarget.dataset.bundleid;
		console.log(this.bundleHeights, bundleId);
		optionContent.firstElementChild.style.height = this.bundleHeights[bundleId] + "px";
	}
	else{
		optionContent.firstElementChild.style.height = "0px";
	}	
	
}

document.addEventListener( "DOMContentLoaded", function() {
	var kit1 = new kitBuilder("bundle-container1",["bundle-button1","bundle-button2","bundle-button3"]);
});

