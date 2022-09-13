import "./style.css";
import * as dom from "./dom";
import * as project from "./project";
import * as tasks from "./tasks";

const project1 = new project.Project("pTitle1", "Description1", 7);
const project2 = new project.Project("pTitle2", "Description2", 4);

dom.newProject.onclick = () => {
	dom.renderNewProjectTab();
};
myList.onclick = dom.renderClearMain;
