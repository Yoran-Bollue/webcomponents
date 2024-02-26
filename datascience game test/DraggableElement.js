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
                    border: 1px solid #000;
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
                <img src="kisspng-analytics-big-data-data-analysis-computer-icons-bu-kpi-5b4a1dc72e12d7.5416296415315839431887.jpg" alt="Logo">
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

    handleDragEnd() {
        this.draggable = false;
    }
}

customElements.define('draggable-element', DraggableElement);
