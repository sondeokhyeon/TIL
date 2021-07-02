export interface Component {
  atttachTo(parent: HTMLElement, position? : InsertPosition) : void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  atttachTo(
    parent: HTMLElement,
    position: InsertPosition = "afterbegin"
  ): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
