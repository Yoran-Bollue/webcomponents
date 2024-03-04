const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll("dragable-element");
let drag = null;

// Add event listeners for drag start and drag end on draggable elements
dragableElements.forEach(element => {
    element.addEventListener("dragstart", () => {
        drag = element;
        element.classList.add("dragging");
    });

    element.addEventListener("dragend", () => {
        drag = null;
        element.classList.remove("dragging");
    });
});

scene.addEventListener("dragover", e => {
    e.preventDefault();
});

scene.addEventListener("drop", e => {
    e.preventDefault();
    if (drag) {
        scene.appendChild(drag);
    }
});

// Add event listeners for dragover on other draggable elements
dragableElements.forEach(draggable => {
    draggable.addEventListener("dragover", e => {
        e.preventDefault();
        const currentDraggable = document.querySelector(".dragging");
        if (drag !== draggable && currentDraggable) {
            draggable.shadowRoot.querySelector(".children").appendChild(currentDraggable);
        }
    });
});
