import { todoComponent } from "./components/page/item/todo.js";
import { ImageComponent } from "./components/page/item/image.js";
import { noteComponent } from "./components/page/item/note.js";
import { videos } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.atttachTo(appRoot);
    const image = new ImageComponent(
      "Image title",
      "https://picsum.photos/600/300"
    );
    image.atttachTo(appRoot, "beforeend");
    const video = new videos(
      "video Title",
      "https://www.youtube.com/embed/4LvgQaM7GkM"
    );
    video.atttachTo(appRoot, "beforeend");

    const note = new noteComponent("note_title", "note_body");
    note.atttachTo(appRoot, "beforeend");

    const todo = new todoComponent("todo_title", "todo");
    todo.atttachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector("#content-cont")! as HTMLElement);
