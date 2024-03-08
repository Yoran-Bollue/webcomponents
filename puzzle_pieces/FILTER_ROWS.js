class FILTER_ROWS extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
            .brick {
                position: absolute;
                top: 0px; /* adjust as needed */
                left: 250px; /* adjust as needed */
                width: 300px; /* adjusted width for protrusion */
                height: 150px;
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
                    <h2>Filter Rows</h2>
                    <button class="close-btn">X</button>
                </div>
                <div class="content">
                    <!-- Content of the brick goes here -->
                    <form>
                      <label for="includeexclude">Type:</label>
                        <input type="radio" id="include" name="includeexclude" value="Include">
                        <label for="include">Include</label>
                        <input type="radio" id="exclude" name="includeexclude" value="Exclude">
                        <label for="exclude">Exclude</label><br>

                        <label for="andor">And/Or:</label>
                        <input type="radio" id="and" name="andor" value="And">
                        <label for="and">And</label>
                        <input type="radio" id="or" name="andor" value="Or">
                        <label for="or">Or</label><br>

                        <label for="conditions">Conditions:</label>
                        <select></select>
                        <select>
                            <option value="condition1">Condition 1</option>
                            <option value="condition2">Condition 2</option>
                            <option value="condition3">Condition 3</option>
                            <option value="condition4">Condition 4</option>
                        </select>
                        <select></select><br>
                    </form>
                </div>
                <div class="connection-point"></div>
                <div class="connection-point-left"></div>
                <span class="tooltiptext">
                  Input:<ul>
                    <li>Dataset: dataframe</li>
                  </ul>
                  Output:<ul>
                    <li>Dataset: dataframe</li>
                  <ul>
                  </span>
            </div>

        `;
    }
}

customElements.define('filter-rows-element', FILTER_ROWS);