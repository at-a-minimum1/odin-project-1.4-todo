import * as domControl from "./modules/dom/domControl";
import { Item } from "./modules/items/item";
import { Card } from "./modules/items/card";
import { format, parseISO, isToday, isThisWeek, addMinutes } from "date-fns";
import { saveData, loadData } from "./modules/utils/dataStorage";

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

// TODO Finish the below method for loading in the data into the cardMap. I don't think the values are being loaded into cardMap correctly. Still trying to see what values are being loaded into the object.
window.addEventListener("load", loadProjects);
function loadProjects() {
	for (const key in localStorage) {
		if (!cardMap.has(key)) {
			cardMap.set(key, loadData(key));
			// Add the key object pair into the map object
		} else {
			// BUG changing loadData. Make sure to change this to avoid bugs
			const loadedData = loadData(key);
			cardMap.set(key, loadedData); //= loadedData;
		}
		const loggedAllTasks = cardMap.get("All Tasks");
		console.log(
			`From local storage: ${typeof loggedAllTasks.item} From cardMap: ${typeof allTasks.item}`
		);
	}
	// TODO After you get the keys from local storage and add the ones that aren't in the map object already, THEN get the values from the local storage adn add them to the projects in the map object.
	// for (let [key, value] of cardMap) {
	// 	value = loadData(key);
	// }

	// Iterate over the local storage object and put them into the DOM
	// For every key in cardMap get the corresponding key from local storage (if it exists) and then load them into map object.
	// for(project in ){
	// domControl.displayTasks("resultsPanel", project);
	// renderProject(project);
	// }
}

document.addEventListener("DOMContentLoaded", () => {
	// Loads the data from local storage and assigns it to the map object.

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
				let dateString = document.getElementById("dueDate").value;
				let date = addMinutes(
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
				const itemDate = new Date(newItem.date); //TODO Figure out why this is here... Do I need an itemDate

				addTask(allTasks, newItem);
				if (currentProject == allTasks) {
					addTask(inbox, newItem);
				}

				if (currentProject != allTasks) {
					if (
						currentProject == nextWeek ||
						currentProject == important ||
						currentProject == today
					) {
						addTask(inbox, newItem);
					} else {
						addTask(currentProject, newItem);
					}
				}
				if (isToday(itemDate)) {
					addTask(today, newItem);
				}
				if (newItem.getPriority == "priorityHigh") {
					addTask(important, newItem);
				}

				console.log(cardMap);
				renderProject(currentProject);
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
				const sortedArray = sortArray(currentArray, "title");

				domControl.clearDOM("resultsPanel");
				renderProject(sortedArray);
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
				renderProject(sortedArray);
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
				renderProject(sortedArray);
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
				renderProject(allTasks);
				headerListName.textContent = "All Tasks";
			},
		},
		{
			// Accesses the today button
			element: document.getElementById("todayTasks"),
			eventType: "click",
			callback: () => {
				renderProject(today);
			},
		},
		{
			// Accesses the Newt Week button
			element: document.getElementById("nextWeekTasks"),
			eventType: "click",
			callback: () => {
				renderProject(nextWeek);
			},
		},
		{
			// Accesses the Important button
			element: document.getElementById("importantTasks"),
			eventType: "click",
			callback: () => {
				renderProject(important);
			},
		},
	];

	elements.forEach(({ element, eventType, callback }) => {
		addEventListener(element, eventType, callback);
	});

	// const headerListName = document.getElementById("headerListName");

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

			domControl.clearDOM("resultsPanel");
			renderProject(getCurrentTaskArray());
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
	function renderProject(project) {
		const projectKey = getMapKey(cardMap, project);
		const projectObj = cardMap.get(projectKey);

		for (const task of projectObj) {
			domControl.addCard("resultsPanel", task.cardHtml);
		}
	}

	// TODO finish the below method to display all the projects that are saved in the local storage . ChatGPT gave the following solution. Which is wrong, but informative.
	function renderProjectList() {}

	// function loadProjects() {
	//   for (let i = 0; i < localStorage.length; i++) {
	//     const key = localStorage.key(i);
	//     // Check if the key corresponds to a project
	//     if (key.startsWith("project_")) {
	//       const projectData = JSON.parse(localStorage.getItem(key));
	//       // Process the project data and add it to the DOM
	//       // ...
	//     }
	//   }
	// }

	function getMapKey(map, array) {
		for (const [key, value] of map.entries()) {
			if (value === array) {
				return key;
			}
		}
		return null; // Array not found in the map
	}

	function addTask(project, task) {
		const newCard = new Card(task);
		const newCardHtml = newCard.createCard();
		const taskObject = { item: task, card: newCard, cardHtml: newCardHtml };
		const projectKey = `project-${getMapKey(cardMap, project)}`;
		// TODO Changed the commented out line to something different.
		// saveData(projectKey, taskObject);
		saveData(projectKey, task);
		project.push(taskObject);
	}

	function sortArray(array, sortBy) {
		const priorityValues = {
			priorityHigh: 3,
			priorityMedium: 2,
			priorityLow: 1,
		};

		if (sortBy === "title") {
			array.sort((a, b) => {
				if (a.item.title < b.item.title) {
					return -1;
				}
				if (a.item.title > b.item.title) {
					return 1;
				}
				return 0;
			});
		}
		// BUG Sort by date bug: Uncaught TypeError: b.item.date.localeCompare is not a function
		if (sortBy === "date") {
			array.sort((a, b) => b.item.date.localeCompare(a.item.date));
		}
		if (sortBy === "priority") {
			array.sort((a, b) => {
				const aVal = priorityValues[a.item.priority];
				const bVal = priorityValues[b.item.priority];
				return bVal - aVal;
			});
		}

		return array;
	}
});

// TODO: Implement persistence for the app by using the Web Storage API.

// TODO: Create a function to load the data from localStorage when the app is first loaded.

// TODO: Handle cases where the data is not present in localStorage without crashing the app.

// TODO Finish reassign tasks to take the item as the argument and when the save button is clicked it will reassign the tasks depending if it's next week, today, or important. Might improve the following to also handle putting the items into different projects.
// function reassignTasks(item) {
// 	// Reassigns the tasks to today if it is today
// 	if (isToday(item.date)) {
// 		// today.push();
// 	}
// 	// Reassigns the tasks to next week if it is next week
// 	if (item.date) {
// 	}
// 	// Reassigns the tasks to important if they have a high priority
// 	if (item.priority) {
// 	}
// }
