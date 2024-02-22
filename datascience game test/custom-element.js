class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div class="custom-element">
          <img src="placeholder_logo.png" alt="Logo">
          <p class="name">dit is een test</p>
        </div>
      `;
    }
  
    connectedCallback() {
      this.draggable = false;
      this.dragData = {};
      this.element = this.shadowRoot.querySelector('.custom-element');
      this.element.addEventListener('mousedown', this.handleDragStart.bind(this));
      this.element.addEventListener('mouseup', this.handleDragEnd.bind(this));
      this.element.addEventListener('mousemove', this.handleDrag.bind(this));
    }
  
    setName(name) {
      this.shadowRoot.querySelector('.name').textContent = name;
    }
  
    handleDragStart(event) {
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
  
  customElements.define('custom-element', CustomElement);
  