var balloon = document.getElementById("balloon");

var colors = ["red", "green", "blue"];
var colorIndex = 0;

var minSize = 200;
var maxSize = 420;
var size = minSize;

function updateBalloon() {
	balloon.style.width = size + "px";
	balloon.style.height = size + "px";
	balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", function () {
	size += 10;
	colorIndex = (colorIndex + 1) % colors.length;

	if (size > maxSize) {
		size = minSize;
		colorIndex = 0;
	}

	updateBalloon();
});

balloon.addEventListener("mouseleave", function () {
	size -= 5;
	if (size < minSize) {
		size = minSize;
	}

	colorIndex = (colorIndex - 1 + colors.length) % colors.length;

	updateBalloon();
});
