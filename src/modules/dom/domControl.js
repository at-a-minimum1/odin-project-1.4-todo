import { Card } from "../items/card";
import { List } from "../items/list";

export function addCard(id, card) {
	const createdCard = card.createCard();
	// this.card = card.createCard();

	const target = document.getElementById(id);
	target.appendChild(createdCard);
}

export function addProject(list) {
	const project = list;
	const expandButton = document.createElement("button");
	const listButton = document.createElement("button");
	const projectWrapper = document.getElementById("projectPanel");
	const listContainer = document.createElement("div");
	const ulList = document.createElement("ul");
	for (listItem of project) {
		const liItem = document.createElement("li");
		liItem.textContent = "-" + listItem.title;
		ulList.appendChild(liItem);
	}
	// Set up the text content of the elements
	expandButton.textContent = "+";
	listButton.textContent = project.title;
	// Set up the classList for the elements
	listButton.classList.add("list-button");
	expandButton.classList.add("expand-collapse-button");
	ulList.classList.add("ul-list");
	ulList.classList.add("hide");

	listContainer.appendChild(expandButton);
	listContainer.appendChild(listButton);
	listContainer.appendChild(ulList);

	projectWrapper.appendChild(listContainer);
}

// export function addListItem(list) {
// 	const listItem = document.createElement(ul);
// }

// export function updateList(items) {
// 	// ijdfsoisjfd
// 	const container = document.getElementById("someContainer");
// 	items.forEach((item) => {
// 		const ul = document.createElement("ul");
// 		ul.textContent = item.title;
// 		container.appendChild(ul);
// 	});
// }

export function removeCard() {
	console.log("remove card invoked");
}

export function clearDOM(id) {
	const panel = document.getElementById(id);
	// Clears all the elements in the id container
	while (panel.firstChild) {
		panel.firstChild.remove();
	}
}

export function displayTasks(taskList) {
	for (const task of taskList) {
		// Add the task
		const card = new Card(task);
		addCard("resultsPanel", card);
	}
}

export function clearForm() {
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");
	title.value = "-No Title-";
	date.value = "2024-06-11";
}

export function expandCollapse(container) {
	container.classList.toggle("hide");
}

// Refactor this to toggle without the shadow DOm
// export function toggleCollapsibleCard(event) {
// 	const btn = event.target;
// 	let card = btn.closest(".collapsible-card");
// 	const shadowRoot = btn.getRootNode();

// 	// Reassign card if it's in the shadow DOM
// 	if (card == null) {
// 		card = shadowRoot.host;

// 		if (card == null) {
// 			console.log("Card not being accessed in toggleCollapsibleCard.");
// 			return;
// 		}
// 		console.log("Card value: " + card.classList);
// 	}
// 	const header =
// 		card.querySelector(".collapsible-title") ||
// 		shadowRoot.querySelector(".collapsible-title");

// 	console.log("Header value: " + header.classList);

// 	const date = card.querySelector(".date") || shadowRoot.querySelector(".date");

// 	const input =
// 		card.querySelector(".input-wrapper") ||
// 		shadowRoot.querySelector(".input-wrapper");

// 	const contentCollapsible =
// 		card.querySelector(".collapsible-content") ||
// 		shadowRoot.querySelector(".collapsible-content");

// 	const editDelete =
// 		card.querySelector(".edit-delete-wrapper") ||
// 		shadowRoot.querySelector(".edit-delete-wrapper");

// 	const descriptionHeader =
// 		card.querySelector(".description-header") ||
// 		shadowRoot.querySelector(".description-header");

// 	const description =
// 		card.querySelector(".description") ||
// 		shadowRoot.querySelector(".description");

// 	header.classList.toggle("hide");
// 	date.classList.toggle("hide");
// 	input.classList.toggle("hide");
// 	contentCollapsible.classList.toggle("hide");
// 	editDelete.classList.toggle("hide");
// 	descriptionHeader.classList.toggle("hide");
// 	description.classList.toggle("hide");

// 	card.classList.toggle("expanded");

// 	const expand =
// 		card.querySelector(".collapsible-btn") ||
// 		shadowRoot.querySelector(".collapsible-btn");
// 	const content =
// 		card.querySelector(".collapsible-content") ||
// 		shadowRoot.querySelector(".collapsible-content");
// 	if (card.classList.contains("expanded")) {
// 		expand.textContent = "Collapse";
// 		// content.style.height = "100000px";
// 		content.style.height = content.scrollHeight + "px";
// 		content.style.backgroundColor = "white";
// 		// content.style.paddingBottom = "200px";
// 	} else {
// 		expand.textContent = "Expand";
// 		content.style.height = "0";
// 	}
// }
