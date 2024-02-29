class DraggableElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .draggable-element {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    /*border: 1px solid #000;*/
                }
                img {
                    width: 80%; /* Adjust the size of the image here */
                    height: auto;
                    display: block;
                    margin: auto;
                }
                .name {
                    text-align: center;
                    margin-top: 5px;
                }
            </style>
            <div class="draggable-element">
                <img src="kisspng-analytics-big-data-data-analysis-computer-icons-bu-kpi-5b4a1dc72e12d7.5416296415315839431887.png" alt="Logo">
                <p class="name">Custom Draggable Element</p>
            </div>
        `;

        this.element = this.shadowRoot.querySelector('.draggable-element');
        this.element.addEventListener('mousedown', this.handleDragStart.bind(this));
        document.addEventListener('mouseup', this.handleDragEnd.bind(this));
        document.addEventListener('mousemove', this.handleDrag.bind(this));
    }

    handleDragStart(event) {
        event.preventDefault();
        this.draggable = true;
        this.dragData = {
            offsetX: event.offsetX,
            offsetY: event.offsetY
        };
    
        // Append the element to the body so it's not restricted to the sidebar container
        document.body.appendChild(this);
    }
    
    handleDragEnd() {
        this.draggable = false;
    
        // Check if the element is within the main container
        const container = document.getElementById('container');
        const rect = container.getBoundingClientRect();
        const x = parseInt(this.style.left);
        const y = parseInt(this.style.top);
    
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            // If the element is within the main container, append it to the container
            container.appendChild(this);
        }
    }
    
    handleDrag(event) {
        if (this.draggable) {
            const x = event.clientX - this.dragData.offsetX;
            const y = event.clientY - this.dragData.offsetY;
            this.style.position = 'absolute';
            this.style.left = x + 'px';
            this.style.top = y + 'px';
        }
    }
}

customElements.define('draggable-element', DraggableElement);
