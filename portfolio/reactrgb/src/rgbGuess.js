var colorDisplay = document.getElementById("colorDisplay");
var resetBtn = document.getElementById("reset");
var messageDisplay = document.getElementById("message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");


var difficulty = 6;
var colors = [];
var pickedColor;

// ---------------------------------------------------------------------

init(difficulty);

// ---------------------------------------------------------------------

function init(difficulty){
	for(var i=0; i<difficulty; i++){
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				win(pickedColor);
			}
			else{
				this.style.backgroundColor = "#232323";
				this.style.boxShadow = "none";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	resetBtn.addEventListener("click", function(){
		reset(difficulty);
	});

	easyBtn.addEventListener("click", function(){
		difficulty = 3;
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		for(var i=3; i<squares.length; i++){
			squares[i].style.display = "none";
		}
		reset(difficulty);
	});

	hardBtn.addEventListener("click", function(){
		difficulty = 6;
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		for(var i=3; i<squares.length; i++){
			squares[i].style.display = "block";
		}
		reset(difficulty);
	});

	reset(difficulty);
}

function reset(difficulty){
	colors = [];
	for(var i=0; i<difficulty; i++){
		colors[i] = randomColor();
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = pickColor(difficulty);
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var random =  "rgb("+r+", "+g+", "+b+")";
	return random;
}

function pickColor(difficulty){
	var random = Math.floor(Math.random()*(difficulty));
	return colors[random];
}

function win(color){
	messageDisplay.textContent = "Correct!";
	h1.style.backgroundColor = color;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	resetBtn.textContent = "Play Again?";
	return;
}