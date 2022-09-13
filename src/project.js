import * as dom from "./dom";

class project {
	constructor(title, life) {
		dom.renderNewProjectTab();

		this.title = title;
		this.life = life;
	}
}
