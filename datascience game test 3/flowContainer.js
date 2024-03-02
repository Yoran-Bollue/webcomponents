class FlowContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute("title");
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap:wrap;
                    width: 80%;
                    margin-bottom:5px;
                }
                
                .wrapper {
                    border: 2px solid #000;
                    display: flex;
                    padding: 10px;
                    justify-content:flex-start;
                    height:60px;
                    width: 80%;
                    margin-right: 5px;
                }

                h4{
                    margin: 2px;
                    width:100%
                }

                button {
                    cursor: pointer;
                }

                dragable-element {
                    height: 60%;
                }

            </style>
            <h4>${title}</h4>
            <div class="wrapper">

            </div>
            <button id="deleteButton">Delete</button>
            `;

            const deleteButton = this.shadowRoot.getElementById('deleteButton');
            deleteButton.addEventListener('click', () => {
                this.remove();
            });

    }
    static get observedAttributes() {
        return ['title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title' && oldValue !== newValue) {
            this.title = newValue;
            this.updateTitle();
        }
    }
    
    updateTitle() {
        const titleElement = this.shadowRoot.querySelector('h4');
        if (titleElement) {
            titleElement.textContent = this.title;
        }
    }

}




customElements.define("flow-container", FlowContainer);
