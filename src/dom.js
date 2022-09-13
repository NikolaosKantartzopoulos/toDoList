import * as project from "./project";
export const myMain = document.getElementById("main");
export const myList = document.getElementById("myList");
export const todayTasks = document.getElementById("todayTasks");
export const thisWeekTasks = document.getElementById("thisWeekTasks");
export const allProjects = document.getElementById("allProjects");
export const newProject = document.getElementById("newProject");

export function renderClearMain() {
	myMain.innerHTML = "";
}

export function renderNewProjectTab() {
	renderClearMain();
	//-------------------- Form -------------------
	let tempForm = document.createElement("form");
	tempForm.classList.add(
		"w-full",
		"h-full",
		"bg-zinc-800",
		"flex",
		"flex-col",
		"mx-auto",
		"p-8",
		"gap-8"
	);
	//-------------------- Header -------------------
	let createNewProjectHeader = document.createElement("h1");
	createNewProjectHeader.textContent = "Add new Project";
	createNewProjectHeader.classList.add("text-white", "text-center", "text-xl");
	//-------------------- taskTitle -------------------
	let titleBox = document.createElement("input");
	titleBox.type = "text";
	titleBox.placeholder = "Title";
	titleBox.name = "taskTitle";
	titleBox.id = "taskTitle";
	//-------------------- descriptionBox -------------------
	let descriptionBox = document.createElement("textarea");
	descriptionBox.setAttribute("rows", "4");
	descriptionBox.setAttribute("cols", "50");
	descriptionBox.placeholder = "Description...";
	descriptionBox.id = "description";
	descriptionBox.name = "description";
	//-------------------- lifeBox -------------------
	let lifeBox = document.createElement("input");
	lifeBox.type = "number";
	lifeBox.placeholder = "How many days?";
	lifeBox.id = "life";
	lifeBox.name = "life";
	//-------------------- submitNewProject -------------------
	let submitNewProject = document.createElement("button");
	submitNewProject.textContent = "Submit";
	submitNewProject.id = "submitNewProjectButton";
	submitNewProject.classList.add("py-2", "px-4", "bg-blue-500", "text-white");
	//-------------------- Render -------------------
	tempForm.appendChild(createNewProjectHeader);
	tempForm.appendChild(titleBox);
	tempForm.appendChild(descriptionBox);
	tempForm.appendChild(lifeBox);
	tempForm.appendChild(submitNewProject);
	myMain.appendChild(tempForm);
}

export function renderNewTask() {
	renderClearMain();
	//-------------------- Form -------------------
	let tempForm = document.createElement("form");
	tempForm.classList.add(
		"w-full",
		"h-full",
		"bg-zinc-800",
		"flex",
		"flex-col",
		"mx-auto",
		"p-8",
		"gap-8"
	);
	//-------------------- Header -------------------
	let createNewTaskHeader = document.createElement("h1");
	createNewTaskHeader.textContent = "Add new Task";
	createNewTaskHeader.classList.add("text-white", "text-center", "text-xl");
	//-------------------- Header -------------------
	let titleBox = document.createElement("input");
	titleBox.type = "text";
	titleBox.placeholder = "Title";
	//-------------------- descriptionBox -------------------
	let descriptionBox = document.createElement("textarea");
	descriptionBox.setAttribute("rows", "4");
	descriptionBox.setAttribute("cols", "50");
	descriptionBox.placeholder = "Description...";
	//-------------------- lifeBox -------------------
	let lifeBox = document.createElement("input");
	lifeBox.type = "number";
	lifeBox.placeholder = "How many days?";
	//-------------------- submitNewTask -------------------
	let submitNewTask = document.createElement("button");
	submitNewTask.textContent = "Submit";
	submitNewTask.classList.add("py-2", "px-4", "bg-blue-500", "text-white");
	//-------------------- Render -------------------
	tempForm.appendChild(createNewTaskHeader);
	tempForm.appendChild(titleBox);
	tempForm.appendChild(descriptionBox);
	tempForm.appendChild(lifeBox);
	tempForm.appendChild(submitNewTask);
	myMain.appendChild(tempForm);
}
