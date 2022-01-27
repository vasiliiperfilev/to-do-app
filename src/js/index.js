import "../styles/index.css";
import { createController } from "./controller";

const controller = createController();
const li = document.querySelector(".cdefault-project");
const content = document.querySelector(".content")
li.addEventListener("click", controller.chooseProject.bind(li, content));

const addProjectBtn = document.querySelector(".add-btn.project");
const addProjectPopup = document.querySelector(".add-popup.project")
addProjectBtn.addEventListener("click", controller.openAddToListPopup.bind(null, addProjectPopup, addProjectBtn));

const closePopupBtn = document.querySelector(".add-popup.project .cancel-btn-popup");
closePopupBtn.addEventListener("click", controller.closeAddToListPopup.bind(null, addProjectPopup, addProjectBtn));

const projectList = document.querySelector(".list.project ul");
const addProjectPopupBtn = document.querySelector(".add-popup.project .add-btn-popup");
addProjectPopupBtn.addEventListener("click", () => {
    controller.addProject(addProjectPopup, projectList, content);
    closePopupBtn.click();
})