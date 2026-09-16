function isPositiveInteger(value) {
	return /^[0-9]+$/.test(value);
}

$(document).ready(function () {
	$("#calcForm").on("submit", function (event) {
		event.preventDefault();

		var leftValue = $("#leftMember").val();
		var rightValue = $("#rightMember").val();
		var operator = $("#operator").val();

		if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
			alert("Error :(");
			return;
		}

		var left = parseInt(leftValue, 10);
		var right = parseInt(rightValue, 10);

		if ((operator === "/" || operator === "%") && right === 0) {
			alert("It's over 9000!");
			return;
		}

		var result;

		switch (operator) {
			case "+":
				result = left + right;
				break;
			case "-":
				result = left - right;
				break;
			case "*":
				result = left * right;
				break;
			case "/":
				result = left / right;
				break;
			case "%":
				result = left % right;
				break;
		}

		console.log(result);
		alert(result);
	});

	setInterval(function () {
		alert("Please, use me...");
	}, 30000);
});
