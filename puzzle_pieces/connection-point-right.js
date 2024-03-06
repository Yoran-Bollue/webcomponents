class ConnectionRight extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>  
              .connection-point {
                position: absolute;
                top: 50%;
                right: -10px; /* adjust for the protrusion */
                transform: translateY(-50%);
                width: 20px;
                height: 40px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }                      
            </style>
            <div class="connection-point"></div>
        `;
    }
}

customElements.define('connection-right-element', ConnectionRight);