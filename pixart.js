
//variable
var currentColor
var body = $("body");


//create loop to add 20 DIVs to body
for (var i = 0; i < 8000; i++) {
	body.append("<div class='square'></div>")
	console.log('div added to body')
};


function updateCSS() {
	$(".brush").css("background-color", currentColor)
}

function changeSquareColor() {
	$(this).css("background-color", currentColor);
}

//store color to global color variable

//click event
$("#form").on("submit", function (event) {
	event.preventDefault()
	console.log('preventing default');
	currentColor = $("input").val();
	console.log(currentColor);
	updateCSS();
});

$(".square").mouseover(changeSquareColor);




















