const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll("dragable-element");
let flowContainers = Array.from(document.querySelectorAll("flow-container"));

let drag = null;

// Add event listeners for drag start and drag end on dragable elements
dragableElements.forEach(element => {
    element.addEventListener("dragstart", () => {
        drag = element;
    });

    element.addEventListener("dragend", () => {
        drag = null;
    });
});

// Initialize event listeners for existing flow containers
loopContainers();

// Function to add event listeners for drag over, drag leave, and drop events on flow containers
function loopContainers() {
    flowContainers.forEach(container => {
        container.addEventListener("dragover", handleDragOver);
        container.addEventListener("dragleave", handleDragLeave);
        container.addEventListener("drop", handleDrop);
    });
}

// Event handler for drag over event
function handleDragOver(e) {
    e.preventDefault();
    this.shadowRoot.querySelector(".wrapper").style.borderColor = "#f0f";
}

// Event handler for drag leave event
function handleDragLeave() {
    this.shadowRoot.querySelector(".wrapper").style.borderColor = "#000";
}

// Event handler for drop event
function handleDrop() {
    if (drag) {
        this.shadowRoot.querySelector(".wrapper").style.borderColor = "#000";
        if (drag.closest(".sidebar")) {
            const clone = drag.cloneNode(true);
            this.shadowRoot.querySelector(".wrapper").appendChild(clone);
            clone.addEventListener("dragstart", () => {
                drag = clone;
            })
        } else {
            this.shadowRoot.querySelector(".wrapper").appendChild(drag);
        }
    }
}
