const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll("dragable-element");
let draggingElement = null;

dragableElements.forEach(function(element) {
    element.addEventListener("dragstart", handleDragStart);
});

scene.addEventListener("dragover", handleDragOver);
scene.addEventListener("drop", handleDrop);

function handleDragStart(e) {
    draggingElement = e.target;
    let rect = draggingElement.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;
    e.dataTransfer.setData("offsetX", offsetX);
    e.dataTransfer.setData("offsetY", offsetY);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (draggingElement) {
        if (draggingElement.closest(".sidebar")) {
            const clone = draggingElement.cloneNode(true);
            scene.appendChild(clone);
            clone.addEventListener("dragstart", handleDragStart);
            draggingElement = clone;
        }

        let offsetX = parseInt(e.dataTransfer.getData("offsetX"));
        let offsetY = parseInt(e.dataTransfer.getData("offsetY"));
        let top = e.clientY - offsetY - scene.getBoundingClientRect().top;
        let left = e.clientX - offsetX - scene.getBoundingClientRect().left;
        let maxTop = scene.clientHeight - draggingElement.clientHeight;
        let maxLeft = scene.clientWidth - draggingElement.clientWidth;
        top = Math.max(0, Math.min(maxTop, top));
        left = Math.max(0, Math.min(maxLeft, left));
        draggingElement.style.top = `${top}px`;
        draggingElement.style.left = `${left}px`;
        draggingElement.style.position = "absolute";
        draggingElement = null;
    }
}
