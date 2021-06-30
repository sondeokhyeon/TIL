import { ImageComponent } from "./components/page/item/image.js";
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
  }
}

new App(document.querySelector("#content-cont")! as HTMLElement);
