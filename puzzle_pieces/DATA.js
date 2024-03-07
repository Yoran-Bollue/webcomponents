class DATA extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
            .brick {
                position: absolute;
                top: 0px; /* adjust as needed */
                left: 100px; /* adjust as needed */
                width: 200px; /* adjusted width for protrusion */
                height: 100px;
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
              .bar h2 {
                position: relative;
                margin: 0;
                padding: 0;
                font-family: sans-serif;
                font-size: 100%;
                text-align: center;
                top: 55%;
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
              }
              /* Tooltip container */
              .tooltip {
                position: relative;
                display: inline-block;
                border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
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
                    <h2>Data</h2>
                    <button class="close-btn">X</button>
                </div>
                <div class="content">
                    <!-- Content of the brick goes here -->
                    <form>
                      <label for="file">Select a file:</label>
                      <select name="file" id="file">
                        <option value="titanic">titanic</option>
                        <option value="iris">iris</option>
                      </select>
                    </form>
                </div>
                <div class="connection-point"></div>
                <span class="tooltiptext">Input:<br>/<br>Output:<br>- Dataset: dataframe</span>
            </div>

        `;
    }
}

customElements.define('data-element', DATA);