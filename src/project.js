import * as dom from "./dom";
import * as index from "./index";

export class Project {
	constructor(title, description, life) {
		this.title = title;
		this.description = description;
		this.life = life;
	}
	tasks = [];
}

export function getListOfAllProjects() {
	dom.renderClearMain();
	index.allProjectsArray.forEach((prj) => {
		let tempProject = document.createElement("button");
		tempProject.textContent = prj.title;
		tempProject.classList.add(
			"p-4",
			"text-white",
			"border-4",
			"border-double",
			"border-rose-600"
		);
		tempProject.onclick = () => dom.renderExistingProject(prj);
		dom.myMain.appendChild(tempProject);
	});
}
