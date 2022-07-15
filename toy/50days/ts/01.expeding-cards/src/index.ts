const panels: NodeListOf<HTMLDivElement> = document.querySelectorAll(".panel");

const ACTIVE: string = "active";

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClasses();
    panel.classList.add(ACTIVE);
  });
});

function removeActiveClasses(): void {
  panels.forEach((panel) => {
    panel.classList.remove(ACTIVE);
  });
}
