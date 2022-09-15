import * as project from "./project";
import * as index from "./index";
import * as helperFunctions from "./helperFunctions";
import editIconURL from "./images/pencil.png";
export const myMain = document.getElementById("main");
export const myList = document.getElementById("myList");
export const todayTasks = document.getElementById("todayTasks");
export const thisWeekTasks = document.getElementById("thisWeekTasks");
export const allProjects = document.getElementById("allProjects");
export const newProject = document.getElementById("newProject");

export function renderClearMain() {
	myMain.innerHTML = "";
}

export function renderExistingProject(currentProject) {
	renderClearMain();
	/* #region DOM */
	//-------------------- Form -------------------
	let tempProject = document.createElement("div");
	tempProject.classList.add(
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
	let createExistingProjectHeader = document.createElement("h1");
	createExistingProjectHeader.textContent = currentProject.title;
	createExistingProjectHeader.classList.add(
		"text-white",
		"text-center",
		"text-4xl"
	);
	let editExistingProjectIcon = new Image();
	editExistingProjectIcon.src = editIconURL;
	editExistingProjectIcon.classList.add("inline");
	createExistingProjectHeader.appendChild(editExistingProjectIcon);

	//-------------------- descriptionBox -------------------
	let descriptionBox = document.createElement("div");
	descriptionBox.classList.add("text-white", "bg-zinc-500", "text-lg");
	descriptionBox.textContent = currentProject.description;
	//-------------------- lifeBox -------------------
	let lifeBox = document.createElement("div");
	lifeBox.textContent = currentProject.life;
	lifeBox.classList.add("text-white", "bg-zinc-500", "min-h-[50px]");
	//-------------------- Render -------------------
	tempProject.appendChild(createExistingProjectHeader);
	tempProject.appendChild(descriptionBox);
	tempProject.appendChild(lifeBox);
	myMain.appendChild(tempProject);

	let projectsTasksList = document.createElement("div");
	tempProject.appendChild(projectsTasksList);

	currentProject.tasks.forEach((curTask) => {
		let taskDiv = document.createElement("button");
		taskDiv.textContent = curTask.title;
		taskDiv.classList.add("text-white", "bg-zinc-500", "m-8");
		taskDiv.onclick = () => renderExistingTask(curTask);
		projectsTasksList.appendChild(taskDiv);
	});
	/* #endregion */
	/* #region Edit Project*/
	editExistingProjectIcon.onclick = () => {
		return renderNewProjectTab(currentProject);
		console.log(`Returned with ${currentProject.title}`);
	};

	/* #endregion*/
}

export function renderExistingTask(currentTask) {
	renderClearMain();
	//-------------------- Form -------------------
	let tempTaskDiv = document.createElement("div");
	tempTaskDiv.classList.add(
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
	let createExistingTaskHeader = document.createElement("h1");
	createExistingTaskHeader.textContent = currentTask.title;
	createExistingTaskHeader.classList.add(
		"text-white",
		"text-center",
		"text-xl"
	);
	//-------------------- descriptionBox -------------------
	let descriptionBox = document.createElement("div");
	descriptionBox.classList.add("text-rose-500", "bg-zinc-500");
	descriptionBox.textContent = currentTask.description;
	//-------------------- lifeBox -------------------
	let lifeBox = document.createElement("div");
	lifeBox.textContent = currentTask.life;
	lifeBox.classList.add("text-white", "bg-zinc-500");
	//-------------------- priorityBox -------------------
	let priorityBox = document.createElement("div");
	priorityBox.classList.add("text-white", "bg-zinc-500");
	priorityBox.textContent = currentTask.priority;
	//-------------------- Render -------------------
	tempTaskDiv.appendChild(createExistingTaskHeader);
	tempTaskDiv.appendChild(descriptionBox);
	tempTaskDiv.appendChild(lifeBox);
	tempTaskDiv.appendChild(priorityBox);
	myMain.appendChild(tempTaskDiv);
}

export function renderNewProjectTab(currentProject) {
	let titlePlaceholder;
	let descriptionPlaceholder;
	let lifePlaceholder;

	currentProject.title != ""
		? (titlePlaceholder = currentProject.title)
		: (titlePlaceholder = "Title..."),
		currentProject.description != ""
			? (descriptionPlaceholder = currentProject.description)
			: (descriptionPlaceholder = "Description..."),
		lifePlaceholder != ""
			? (lifePlaceholder = currentProject.life)
			: (lifePlaceholder = "How many days?");
	if (titlePlaceholder.title != "Title...") {
		index.allProjectsArray.forEach((a) => {
			if (a.title == currentProject.title) {
				let ind = index.allProjectsArray.indexOf(a.title);
				console.log(
					`Deleted from allProjectsArray => ${index.allProjectsArray} --> ${a.title}`
				);
				index.allProjectsArray.splice(ind - 1, 1);
			}
		});
	}
	renderClearMain();
	/* #region dom setup */
	//-------------------- Form -------------------
	let tempForm = document.createElement("div");
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
	helperFunctions.setPlaceholderValues(titlePlaceholder, "Title...", titleBox);
	titleBox.name = "taskTitle";
	titleBox.id = "taskTitle";
	//-------------------- descriptionBox -------------------
	let descriptionBox = document.createElement("textarea");
	descriptionBox.setAttribute("rows", "4");
	descriptionBox.setAttribute("cols", "50");
	helperFunctions.setPlaceholderValues(
		descriptionPlaceholder,
		"Description...",
		descriptionBox
	);
	descriptionBox.id = "description";
	descriptionBox.name = "description";
	//-------------------- lifeBox -------------------
	let lifeBox = document.createElement("input");
	lifeBox.type = "number";
	helperFunctions.setPlaceholderValues(
		lifePlaceholder,
		"How many days?",
		lifeBox
	);
	lifeBox.id = "life";
	lifeBox.name = "life";
	//-------------------- submitNewProject -------------------
	let submitNewProject = document.createElement("button");
	submitNewProject.textContent = "Submit";
	submitNewProject.id = "submitNewProjectButton";
	submitNewProject.classList.add("py-2", "px-4", "bg-blue-500", "text-white");
	if (titlePlaceholder == "Title...") {
		submitNewProject.classList.add("opacity-50", "pointer-events-none");
	}
	//-------------------- Render -------------------
	tempForm.appendChild(createNewProjectHeader);
	tempForm.appendChild(titleBox);
	tempForm.appendChild(descriptionBox);
	tempForm.appendChild(lifeBox);
	tempForm.appendChild(submitNewProject);
	myMain.appendChild(tempForm);
	/* #endregion */
	//-------------------- get form -------------------

	//disable - enable key
	//Delete existing project

	titleBox.onkeyup = () => {
		if (titleBox.value.trim() != 0) {
			submitNewProject.classList.remove("opacity-50", "pointer-events-none");
			submitNewProject.classList.add("opacity-100", "pointer-events-auto");
		} else {
			submitNewProject.classList.remove("opacity-100", "pointer-events-auto");
			submitNewProject.classList.add("opacity-50");
		}
	};
	//submit
	submitNewProject.onclick = () => {
		if (titleBox.value.trim() != 0) {
			console.log(
				`submitNewProject clicked -> titleBox.value = ${titleBox.value}`
			);
			let newProject = new project.Project(titleBox.value);
			newProject.description = descriptionBox.value;
			newProject.life = life.value;
			console.log({ newProject });
			index.allProjectsArray.push(newProject);
			titleBox.value = "";
			titleBox.placeholder = "Title";
			descriptionBox.value = "";
			descriptionBox.placeholder = "Description";
			life.value = "";
			life.placeholder = "How many days?";
		}
	};
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
