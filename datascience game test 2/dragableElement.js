class DragableElement extends HTMLElement {
    constructor() {
        super();
        // Get the title attribute
        const title = this.getAttribute("title");

        // Create a shadow DOM
        this.attachShadow({ mode: 'open' });

        // Set the HTML content inside the shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                /* Style for the wrapper div */
                .wrapper {
                    background: linear-gradient(to bottom, #fff, #f0f0f0);
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    cursor: grab;
                    user-select: none;
                    transition: all 0.1s ease-in-out;
                    margin: 5px;
                }

                /* Hover effect */
                .wrapper:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                }

                /* Style for the slot content */
                slot[name="logo"] {
                    font-size: 45px; 
                    color: #007C5A; 
                }

                /* Style for the paragraph */
                p {
                    margin: 0;
                    font-weight: bold;
                    font-size: 12px; 
                    margin-top: 5px;
                }
            </style>
            <!-- Content inside the wrapper div -->
            <div class="wrapper">
                <slot name="logo"></slot>
                <p>${title}</p>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('dragable-element', DragableElement);
