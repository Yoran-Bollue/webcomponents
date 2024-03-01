const scene = document.getElementById("scene");
const dragableElements = document.querySelectorAll(".sidebar dragable-element");
const dragableElementsScene = document.querySelectorAll("#scene .dragable-element");

let draggingElement = null;

dragableElements.forEach(function (element) {
    element.classList.add('hoverableElement')

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
        let offsetX = e.clientX - rect.left;
        let offsetY = e.clientY - rect.top;

        // Prevent the dragged element from going out of the scene's top boundaries
        offsetY = Math.min(Math.max(offsetY, 0), rect.height - draggingElement.offsetHeight);


        // If the draggingElement is from the sidebar, clone and append it to the scene
        if (draggingElement.closest(".sidebar")) {
            const clone = draggingElement.cloneNode(true);
            scene.appendChild(clone);
            clone.classList.remove('hoverableElement')
            clone.classList.add('right-clicked')


            clone.addEventListener("dragstart", (e) => {
                draggingElement = e.target;
            });

            clone.addEventListener("contextmenu", function (e) {
                e.preventDefault(); // Prevent the default right-click menu from appearing      
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


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let startPoint = null;
let endPoint = null;

// Function to draw an arrow
function drawArrow(fromX, fromY, toX, toY){
    const headLength = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
}

// Function to handle mouse down event
canvas.addEventListener("mousedown", function(e) {
    isDrawing = true;
    startPoint = { x: e.offsetX, y: e.offsetY };
});

// Function to handle mouse move event
canvas.addEventListener("mousemove", function(e) {
    if (isDrawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        endPoint = { x: e.offsetX, y: e.offsetY };
        drawArrow(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
    }
});

// Function to handle mouse up event
canvas.addEventListener("mouseup", function(e) {
    isDrawing = false;
    endPoint = { x: e.offsetX, y: e.offsetY };
    drawArrow(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
});
