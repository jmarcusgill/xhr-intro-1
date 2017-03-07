
function executeThisCodeAfterFileLoaded(){
	console.log("It WORKED!!!");
}

function executeThisCodeAfterFileFails(){
	console.log("booooooo");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);










