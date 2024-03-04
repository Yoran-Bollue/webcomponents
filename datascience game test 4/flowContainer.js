class FlowContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute("title");
        
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                    width: 10%;
                    font-size:18px;
                    color: #da2525;
                }

                dragable-element {
                    height: 60%;
                }

                dragable-element i, dragable-element p {
                    font-size: 25px;  
                }

            </style>
            <h4>${title}</h4>
            <div class="wrapper"></div>
            `;

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
