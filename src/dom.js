import * as project from "./project";
export const myMain = document.getElementById("main");
export const newProject = document.getElementById("newProject");

export function renderClearMain() {
	myMain.innerHTML = "";
}

export function renderNewProjectTab() {
	renderClearMain();
	let tempDiv = document.createElement("div");
	tempDiv.classList.add(
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
	let submitNewProject = document.createElement("input");
	submitNewProject.type = "button";
	//-------------------- Render -------------------
	tempDiv.appendChild(createNewProjectHeader);
	tempDiv.appendChild(titleBox);
	tempDiv.appendChild(descriptionBox);
	tempDiv.appendChild(lifeBox);
	tempDiv.appendChild(submitNewProject);
	myMain.appendChild(tempDiv);
}
