import "./style.css";
import * as dom from "./dom";
import * as project from "./project";
import * as tasks from "./tasks";
import * as helperFunctions from "./helperFunctions";

/* #region library */
const project1 = new project.Project("project1", "Description1", 7);
const project2 = new project.Project("project2", "Description2", 4);

const task11 = new tasks.Task(
	"task11",
	"task11description",
	"task11dueDate",
	"task11priority",
	"task11notes",
	"task11checklist"
);
const task21 = new tasks.Task(
	"task21",
	"task21description",
	"task21dueDate",
	"task21priority",
	"task21notes",
	"task21checklist"
);
const task12 = new tasks.Task(
	"task12",
	"task12description",
	"task12dueDate",
	"task12priority",
	"task12notes",
	"task12checklist"
);
const task22 = new tasks.Task(
	"task22",
	"task22description",
	"task22dueDate",
	"task22priority",
	"task22notes",
	"task22checklist"
);
const task23 = new tasks.Task(
	"task23",
	"task23description",
	"task23dueDate",
	"task23priority",
	"task23notes",
	"task23checklist"
);
project1.tasks = [task11, task12];
project2.tasks = [task21, task22, task23];
/* #endregion */

export const allProjectsArray = [project1, project2];

dom.newProject.onclick = () => {
	dom.renderNewProjectTab();
};

dom.allProjects.onclick = () => project.getListOfAllProjects();
