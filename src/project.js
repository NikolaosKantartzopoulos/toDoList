import * as dom from "./dom";

export class Project {
	constructor(title, description, life) {
		dom.renderNewProjectTab();
		this.title = title;
		this.description = description;
		this.life = life;
	}
	tasks = [];
}
