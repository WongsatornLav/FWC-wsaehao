var list = document.getElementById("ft_list");
var newButton = document.getElementById("newButton");

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

function saveTodos() {
	var todos = [];
	var items = list.children;

	for (var i = 0; i < items.length; i++) {
		todos.push(items[i].textContent);
	}

	setCookie("todos", JSON.stringify(todos), 365);
}

function removeTodo(item) {
	var confirmed = confirm("Do you want to remove?");

	if (confirmed) {
		list.removeChild(item);
		saveTodos();
	}
}

function createTodoElement(text) {
	var item = document.createElement("div");
	item.textContent = text;

	item.addEventListener("click", function () {
		removeTodo(item);
	});

	return item;
}

function addTodo(text) {
	var item = createTodoElement(text);
	list.insertBefore(item, list.firstChild);
	saveTodos();
}

function loadTodos() {
	var saved = getCookie("todos");

	if (!saved) {
		return;
	}

	var todos = JSON.parse(saved);

	for (var i = 0; i < todos.length; i++) {
		var item = createTodoElement(todos[i]);
		list.appendChild(item);
	}
}

newButton.addEventListener("click", function () {
	var text = prompt("Enter your new to-do:");

	if (text !== null && text.trim() !== "") {
		addTodo(text.trim());
	}
});

loadTodos();
