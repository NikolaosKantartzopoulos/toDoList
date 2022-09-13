import * as dom from "./dom";

export class Project {
	constructor(title, description, life) {
		dom.renderNewProjectTab();
		this.description = description;
		this.title = title;
		this.life = life;
	}
}
