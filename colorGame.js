var numSqures=6;
var colors =generateColors(numSqures);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
//get the colorDisplay ID
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var resetButton = document.querySelector("#reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");

//easy btn logic 
easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSqures=3;
	colors = generateColors(numSqures);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSqures=6;
	colors = generateColors(numSqures);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
	}
});
resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateColors(numSqures);
	//pick a new random color from array
	pickedColor = pickColor();
	this.textContent="NEW COLORS"
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	//alert(pickedColor);
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent="";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	//alert("Working "+squares.length);
	squares[i].style.backgroundColor=colors[i];
	//add click lister to squres
	squares[i].addEventListener("click", function(){
		var colorClicked=this.style.backgroundColor;
		//console.log(colorClicked+" ," pickedColor);
		 if(colorClicked===pickedColor){
		 	 messageDisplay.textContent="Correct";
		 	changeColor(colorClicked);
		 	h1.style.backgroundColor=colorClicked;
		 	resetButton.textContent="PLAY AGAIN?";

		 }else{
		 	this.style.backgroundColor="#232323";
		 	messageDisplay.textContent="Try Again";
		 }
	});
}
function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}

}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateColors(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		var color=getColor();
		arr.push(color);
	}

	return arr;
}
function getColor(){
	//random number 0 to 256
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";

}
























