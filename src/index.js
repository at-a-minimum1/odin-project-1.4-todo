import * as domControl from "./modules/dom/domControl";
import { Item } from "./modules/items/item";
import { Card } from "./modules/items/card";
import { format, parseISO, isToday, isThisWeek, addMinutes } from "date-fns";

// TODO add the inbox array and then store any value that isn't in a project already into inbox.
const cardMap = new Map();
const allTasks = [];
const today = [];
const nextWeek = [];
const important = [];
const inbox = [];
const odinbook = [];
const todo = [];

cardMap.set("All Tasks", allTasks);
cardMap.set("Today", today);
cardMap.set("Next Week", nextWeek);
cardMap.set("Important", important);
cardMap.set("Inbox", inbox);
cardMap.set("Odinbook", odinbook);
cardMap.set("Todo", todo);

// TODO Look at the following example for reference.
// allTasks.push({{ item: anotherItem, card: anotherCard, cardHtml: anotherCardHtml }});
// cardMap
// 	.get("All Tasks")
// 	.push({ item: anotherItem, card: anotherCard, cardHtml: anotherCardHtml });

document.addEventListener("DOMContentLoaded", () => {
	function addEventListener(element, eventType, callback) {
		element.addEventListener(eventType, callback);
	}

	const elements = [
		{
			// Accesses the add task button
			element: document.getElementById("addTaskModal"),
			eventType: "click",
			callback: () => {
				let title = document.getElementById("title").value;
				const dateString = document.getElementById("dueDate").value;
				const date = addMinutes(
					parseISO(dateString),
					new Date().getTimezoneOffset()
				);

				let description = "Sample Description";
				let priority = document.getElementById("priorityDropdown");
				let selectedPriorityValue = priority.value;
				const currentDate = new Date();

				const currentProject = getCurrentTaskArray();
				const newItem = new Item(
					title,
					date,
					description,
					selectedPriorityValue
				);
				const newCard = new Card(newItem);
				const newCardHtml = newCard.createCard();
				const itemDate = new Date(newItem.date);

				allTasks.push({ item: newItem, card: newCard, cardHtml: newCardHtml });
				if (currentProject == allTasks) {
					inbox.push({
						item: newItem,
						card: newCard,
						cardHtml: newCardHtml,
					});
				}

				if (currentProject != allTasks) {
					if (
						currentProject == nextWeek ||
						currentProject == important ||
						currentProject == today
					) {
						inbox.push({
							item: newItem,
							card: newCard,
							cardHtml: newCardHtml,
						});
					} else {
						currentProject.push({
							item: newItem,
							card: newCard,
							cardHtml: newCardHtml,
						});
					}
				}
				if (isToday(itemDate)) {
					today.push({
						item: newItem,
						card: newCard,
						cardHtml: newCardHtml,
					});
				}
				if (newItem.getPriority == "priorityHigh") {
					important.push({
						item: newItem,
						card: newCard,
						cardHtml: newCardHtml,
					});
				}

				const itemDateUTC = new Date(itemDate.getUTCDate());
				const currentDateUTC = new Date(currentDate.getUTCDate());

				domControl.addCard("resultsPanel", newCardHtml);
			},
		},
		{
			// Accesses the add project button
			element: document.getElementById("addProjectModal"),
			eventType: "click",
			callback: () => {
				const projectKey = document.getElementById("projectName").value;
				const projectObject = [];
				// Checks to see if project already exists in the cardMap.
				if (!cardMap.has(projectKey)) {
					cardMap.set(projectKey, projectObject);
					domControl.addProject(projectKey);
				}
			},
		},

		// Sort buttons
		{
			// Accesses the sort task button
			element: document.getElementById("sortTask"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "task");
				console.log(`Sorted array: ${sortedArray}`);
				console.log(`Unsorted array: ${currentArray}`);
				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
			},
		},

		{
			// Accesses the sort date button
			element: document.getElementById("sortDate"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "date");

				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
			},
		},

		{
			// Accesses the sort priority button
			element: document.getElementById("sortPriority"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "priority");

				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
			},
		},

		{
			// Accesses the add project button
			element: document.getElementById("addProject"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(
					document.getElementById("modalWrapperProject")
				);
			},
		},
		{
			// Accesses the add task button
			element: document.getElementById("addTask"),
			eventType: "click",
			callback: () => {
				document.getElementById("dueDate").valueAsDate = new Date();
				// date.value = new Date();
				domControl.expandCollapse(document.getElementById("modalWrapperTask"));
			},
		},
		{
			// Accesses the close button on the task modal
			element: document.getElementById("closeModalTask"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(document.getElementById("modalWrapperTask"));
			},
		},
		{
			// Accesses the project modal
			element: document.getElementById("modalWrapperProject"),
			eventType: "click",
			callback: (event) => {
				if (!document.getElementById("projectModal").contains(event.target)) {
					domControl.expandCollapse(
						document.getElementById("modalWrapperProject")
					);
				}
			},
		},
		{
			// Accesses the task modal wrapper
			element: document.getElementById("modalWrapperTask"),
			eventType: "click",
			callback: (event) => {
				if (!document.getElementById("taskModal").contains(event.target)) {
					domControl.expandCollapse(
						document.getElementById("modalWrapperTask")
					);
				}
			},
		},
		{
			// Accesses the close button on the project modal
			element: document.getElementById("closeModalProject"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(
					document.getElementById("modalWrapperProject")
				);
			},
		},
		{
			// Accesses the sort button on the project modal
			element: document.getElementById("sort"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the All Tasks button
			element: document.getElementById("allTasks"),
			eventType: "click",
			callback: () => {
				domControl.displayTasks("resultsPanel", allTasks);
				headerListName.textContent = "All Tasks";
				// domControl.displayAllTasks(cardMap, "All Tasks", "resultsPanel");
				// headerListName.textContent = "All Tasks";
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the today button
			element: document.getElementById("todayTasks"),
			eventType: "click",
			callback: () => {
				domControl.displayTasks("resultsPanel", today);
				console.log(today);
				// TODO Get the array to display all the tasks due today
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the Newt Week button
			element: document.getElementById("nextWeekTasks"),
			eventType: "click",
			callback: () => {
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the Important button
			element: document.getElementById("importantTasks"),
			eventType: "click",
			callback: () => {
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
	];

	elements.forEach(({ element, eventType, callback }) => {
		addEventListener(element, eventType, callback);
	});

	const headerListName = document.getElementById("headerListName");

	inputWrapper.addEventListener("click", function (event) {
		if (event.target.matches(".expand-collapse-button")) {
			const btn = event.target;
			const ulList = btn.nextElementSibling.nextElementSibling;
			domControl.expandCollapse(ulList);
			if (ulList.classList.contains("hide")) {
				btn.textContent = "+";
			} else {
				btn.textContent = "-";
			}
		}

		if (event.target.matches(".list-button")) {
			const btn = event.target;
			const btnText = btn.textContent;
			headerListName.textContent = btnText;

			// console.log(getCurrentTaskArray());
			// console.log(cardMap.values());
			domControl.clearDOM("resultsPanel");
			domControl.displayTasks("resultsPanel", getCurrentTaskArray());
		}
	});

	resultsPanel.addEventListener("click", function (event) {
		const cardHtml = event.target.closest(".card");
		const cardID = cardHtml.getAttribute("data-id");
		const cardPriority = cardHtml.querySelector(".input-priority");
		const options = cardPriority.querySelectorAll("option");

		let currentItem;
		const currentProject = getCurrentTaskArray();

		for (const task of currentProject) {
			if (task.item.id == cardID) {
				currentItem = task.item;
				break;
			}
		}

		if (event.target.matches(".expand-button")) {
			domControl.toggleCard(cardHtml);
		}

		if (event.target.matches(".save-button")) {
			const inputTitle = cardHtml.querySelector(".input-title");
			const inputDate = cardHtml.querySelector(".input-date");
			const title = inputTitle.value;
			currentItem.title = inputTitle.value;
			currentItem.date = inputDate.value;
			domControl.renderCard(cardHtml, currentItem);
			domControl.toggleCard(cardHtml);
		}

		if (event.target.matches(".delete-button")) {
			domControl.removeCard(cardHtml);
			let index = currentProject.indexOf(currentItem);
			if (index != -1) {
				currentProject.splice(index, 1);
				if (currentProject != allTasks) {
					index = allTasks.indexOf(currentItem);
					allTasks.splice(index, 1);
				}
			}
		}

		if (event.target.matches(".input-priority")) {
			let inputPriority = event.target;
			currentItem.priority = inputPriority.value;
		}
	});

	function getCurrentTaskArray() {
		let listName = headerListName.textContent.trim();

		return cardMap.get(listName);
	}

	// TODO Finish reassign tasks to take the item as the argument and when the save button is clicked it will reassign the tasks depending if it's next week, today, or important. Might improve the following to also handle putting the items into different projects.
	function reassignTasks(item) {
		// Reassigns the tasks to today if it is today
		if (isToday(item.date)) {
		}
		// Reassigns the tasks to next week if it is next week
		if (item.date) {
		}
		// Reassigns the tasks to important if they have a high priority
		if (item.priority) {
		}
	}

	function sortArray(array, sortBy) {
		const priorityValues = {
			priorityHigh: 3,
			priorityMedium: 2,
			priorityLow: 1,
		};

		if (sortBy === "title") {
			// array.sort((a, b) => {
			array.sort((a, b) => {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		}
		if (sortBy === "date") {
			array.sort((a, b) => b.date.localeCompare(a.date));
		}
		if (sortBy === "priority") {
			array.sort((a, b) => {
				const aVal = priorityValues[a.priority];
				const bVal = priorityValues[b.priority];
				return bVal - aVal;
			});
		}
		return array;
	}
});

// TODO: Install and import the date-fns library to use its helpful functions for formatting and manipulating dates and times.

// TODO: Implement persistence for the app by using the Web Storage API.

// TODO: Create a function to save projects and todos to localStorage every time a new project or todo is created.

// TODO: Create a function to load the data from localStorage when the app is first loaded.

// TODO: Handle cases where the data is not present in localStorage without crashing the app.

// TODO: Be mindful of the JSON format used by localStorage, and handle storing and retrieving methods in object properties.

// TODO Fix the sort method to actually sort and display the html card objects in order.
