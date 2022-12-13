import { BaseComponent } from "../../component.js";

export class videos extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
                <div><iframe class="video__elem" width="600" height="300"></iframe></div>
                <p class="video__title">
            </section>`);
    const videoElement = this.element.querySelector(
      ".video__elem"
    )! as HTMLVideoElement;
    videoElement.src = url;

    const videoTitle = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }
}
