class DragableElement extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute("title");

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    background: linear-gradient(to bottom, #fff, #f0f0f0);
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    cursor: grab;
                    user-select: none;
                    margin-right: 5px;
                    transition: all 0.1s ease-in-out;
                    padding: 10px 0
                }

                :host(:hover) {
                    transform: scale(1.05);
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                }

                slot[name="logo"] {
                    font-size: 45px; 
                    color: #007C5A; 
                }

                p {
                    margin: 0;
                    font-weight: bold;
                    font-size: 10px; 
                    margin-top: 5px;
                }
            </style>
            <slot name="logo"></slot>
            <p>${title}</p>
        `;
    }
}

customElements.define('dragable-element', DragableElement);
