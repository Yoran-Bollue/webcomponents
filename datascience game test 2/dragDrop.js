const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll(".sidebar dragable-element");
const dragableElementsScene = document.querySelectorAll("#scene .dragable-element");

let draggingElement = null;

dragableElements.forEach(function (element) {
    element.addEventListener("dragstart", (e) => {
        draggingElement = e.target;
    });
});

scene.addEventListener("dragover", (e) => {
    e.preventDefault();
});

scene.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggingElement) {
        const rect = scene.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        // If the draggingElement is from the sidebar, clone and append it to the scene
        if (draggingElement.closest(".sidebar")) {
            const clone = draggingElement.cloneNode(true);
            scene.appendChild(clone);

            clone.addEventListener("dragstart", (e) => {
                console.log(e.target)
                draggingElement = e.target;
            });

            // Update dragging element
            draggingElement = clone;
        }

        draggingElement.style.position = "absolute";
        draggingElement.style.left = `${offsetX}px`;
        draggingElement.style.top = `${offsetY}px`;


        // Reset draggingElement to null after dropping
        draggingElement = null;
    }
});

