const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll("dragable-element");
let flowContainers = Array.from(document.querySelectorAll("flow-container"));
let draggableElements = Array.from(document.querySelectorAll("dragable-element"));

let drag = null;

// Add event listeners for drag start and drag end on dragable elements
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

dragableElements.forEach(draggable => {
    draggable.addEventListener("dragover", e => {
        e.preventDefault();
        const currentDraggable = document.querySelector(".dragging");

        if (!draggable.closest('.sidebar')){
            draggable.shadowRoot.querySelector(".children").appendChild(currentDraggable);
        }
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

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = x - box.left - box.width / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }