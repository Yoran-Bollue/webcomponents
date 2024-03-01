class DragableElement extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute("title")
        this.attachShadow({ mode: 'open' });
        this.style.width = "60px";
        this.style.display = "block"
        this.style.textAlign = "center"
        this.style.marginRight= "10px"
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: 100%; 
                }
                p{
                    margin: 0;
                    font-size: 12px;
                }
            </style>
            <div>
                <img src="kisspng-analytics-big-data-data-analysis-computer-icons-bu-kpi-5b4a1dc72e12d7.5416296415315839431887.png" alt="Logo">
                <p>${title}</slot></p>
            </div>
        `;
    }
}

customElements.define('dragable-element', DragableElement);
