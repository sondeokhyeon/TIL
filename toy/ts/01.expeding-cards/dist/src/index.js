"use strict";
const panels = document.querySelectorAll(".panel");
const ACTIVE = "active";
panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
        removeActiveClasses();
        panel.classList.add(ACTIVE);
    });
});
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove(ACTIVE);
    });
}
