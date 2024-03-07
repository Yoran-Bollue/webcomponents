class DUPLICATE extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
            .brick {
                position: absolute;
                top: 100px; /* adjust as needed */
                left: 140px; /* adjust as needed */
                width: 50px; /* adjusted width for protrusion */
                height: 210px;
                background-color: #f0f0f0;
                border-radius: 5px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow effect */
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
              
              .connection-point-right-top {
                position: absolute;
                top: 25%;
                right: -10px; /* adjust for the protrusion */
                transform: translateY(-50%);
                width: 20px;
                height: 40px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }

              .connection-point-right-bottom {
                position: absolute;
                top: 75%;
                right: -10px; /* adjust for the protrusion */
                transform: translateY(-50%);
                width: 20px;
                height: 40px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }

              .connection-point-left {
                position: absolute;
                top: 50%;
                left: -10px; /* adjust for the protrusion */
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
              /* Tooltip container */
              .tooltip {
                position: relative;
                display: inline-block;
              }

              /* Tooltip text */
              .tooltip .tooltiptext {
                visibility: hidden;
                width: 120px;
                background-color: black;
                color: #fff;
                text-align: left;
                padding: 5px;
                border-radius: 6px;
              
                /* Position the tooltip text - see examples below! */
                position: absolute;
                z-index: 1;
                width: 200px;
                top: calc(100% + 5px);
                left: 50%;
                margin-left: -100px; /* Use half of the width (120/2 = 60), to center the tooltip */
              }

              /* Show the tooltip text when you mouse over the tooltip container */
              .tooltip:hover .tooltiptext {
                visibility: visible;
              }
            </style>
            <div class="brick tooltip">
                <div class="bar">
                    <button class="close-btn">X</button>
                </div>
                <div class="content">
                    <!-- Content of the brick goes here -->
                </div>
                <div class="connection-point-right-top"></div>
                <div class="connection-point-right-bottom"></div>
                <div class="connection-point-left"></div>
                <span class="tooltiptext">Input:<ul>
                        <li>Dataset: dataframe</li>
                    </ul>
                    Output:<ul>
                        <li>2x Dataset: dataframe</li>
                    </ul>
                    </span>
            </div>

        `;
    }
}

customElements.define('duplicate-element', DUPLICATE);