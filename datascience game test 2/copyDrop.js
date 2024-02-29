const scene = document.getElementById("scene");
const copyableElements = document.querySelectorAll(".sidebar copyable-element");



let draggingElement = null;

copyableElements.forEach(function(element) {
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
        const clone = draggingElement.cloneNode(true);
        draggingElement = null;

        
        // Get the bounding rectangle of the scene
        const sceneRect = scene.getBoundingClientRect();

        // Calculate the drop position relative to the scene's top-left corner
        const dropX = e.clientX - sceneRect.left;
        const dropY = e.clientY - sceneRect.top;

        // Set position of the clone to match the drop position, including offsets
        clone.style.position = "absolute";
        clone.style.left = `${dropX}px`; // X-coordinate of the drop position
        clone.style.top = `${dropY}px`; // Y-coordinate of the drop position

        scene.appendChild(clone);
    }
});
