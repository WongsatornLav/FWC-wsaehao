$(document).ready(function () {
	var $balloon = $("#balloon");

	var colors = ["red", "green", "blue"];
	var colorIndex = 0;

	var minSize = 200;
	var maxSize = 420;
	var size = minSize;

	function updateBalloon() {
		$balloon.css({
			width: size + "px",
			height: size + "px",
			backgroundColor: colors[colorIndex]
		});
	}

	$balloon.on("click", function () {
		size += 10;
		colorIndex = (colorIndex + 1) % colors.length;

		if (size > maxSize) {
			size = minSize;
			colorIndex = 0;
		}

		updateBalloon();
	});

	$balloon.on("mouseleave", function () {
		size -= 5;
		if (size < minSize) {
			size = minSize;
		}

		colorIndex = (colorIndex - 1 + colors.length) % colors.length;

		updateBalloon();
	});
});
