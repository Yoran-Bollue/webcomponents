class CopyableElement extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute("title")
        this.attachShadow({ mode: 'open' });
        this.style.cursor = "move"
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: 50px; 
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

customElements.define('copyable-element', CopyableElement);
