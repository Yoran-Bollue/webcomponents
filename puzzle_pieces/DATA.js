class DATA extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
            .brick {
                position: absolute;
                top: 100px; /* adjust as needed */
                left: 100px; /* adjust as needed */
                width: 200px; /* adjusted width for protrusion */
                height: 100px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }
              
              .bar {
                position: relative;
                height: 20px;
                background-color: #ccc;
                cursor: move;
                margin: 5px;
                border-radius: 5px;
              }
              
              .content {
                padding: 10px;
              }
              
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
              
              .close-btn {
                position: absolute;
                right: 2px;
                top: 50%;
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 17px;
                height: 17px;
                background-color: #f0f0f0;
                border: none;
                cursor: pointer;
                font-size: 10px;
                text-align: center;
                border-radius: 50%;
                font-weight: bold;
                align-items: center;
                justify-content: center;
              }                         
            </style>
            <div class="brick">
                <div class="bar">
                    <button class="close-btn">X</button>
                </div>
                <div class="content">
                    <!-- Content of the brick goes here -->
                </div>
                <div class="connection-point"></div>
            </div>

        `;
    }
}

customElements.define('data-element', DATA);