function setCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].trim();

		if (cookie.indexOf(name + "=") === 0) {
			return decodeURIComponent(cookie.substring(name.length + 1));
		}
	}

	return null;
}

$(document).ready(function () {
	var $list = $("#ft_list");

	function saveTodos() {
		var todos = [];

		$list.children("div").each(function () {
			todos.push($(this).text());
		});

		setCookie("todos", JSON.stringify(todos), 365);
	}

	function removeTodo($item) {
		var confirmed = confirm("Do you want to remove this to-do item?");

		if (confirmed) {
			$item.remove();
			saveTodos();
		}
	}

	function createTodoElement(text) {
		var $item = $("<div></div>").text(text);

		$item.on("click", function () {
			removeTodo($item);
		});

		return $item;
	}

	function addTodo(text) {
		var $item = createTodoElement(text);
		$list.prepend($item);
		saveTodos();
	}

	function loadTodos() {
		var saved = getCookie("todos");

		if (!saved) {
			return;
		}

		var todos = JSON.parse(saved);

		for (var i = 0; i < todos.length; i++) {
			var $item = createTodoElement(todos[i]);
			$list.append($item);
		}
	}

	$("#newButton").on("click", function () {
		var text = prompt("Enter your new to-do:");

		if (text !== null && text.trim() !== "") {
			addTodo(text.trim());
		}
	});

	loadTodos();
});
