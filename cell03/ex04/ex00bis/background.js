function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

$(document).ready(function () {
	$("#colorButton").on("click", function () {
		$("body").css("background-color", randomColor());
	});
});
