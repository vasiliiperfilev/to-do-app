import "../styles/index.css";
import { createController } from "./controller";

const a = "Default project";
const b = a.replace(/\s/g, '-');
console.log(b);
const controller = createController();
const li = document.querySelector(".default-project");
const content = document.querySelector(".content")
li.addEventListener("click", controller.chooseProject.bind(li, content));