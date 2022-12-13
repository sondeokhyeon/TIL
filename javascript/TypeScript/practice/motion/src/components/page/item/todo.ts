import { BaseComponent } from "../../component.js";

export class todoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo-checkbox">
        </section>`);

    const noteTitle = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    noteTitle.textContent = title;

    const noteBody = this.element.querySelector(
      ".todo-checkbox"
    )! as HTMLInputElement;
    noteBody.insertAdjacentText("afterend", todo);
  }
}
